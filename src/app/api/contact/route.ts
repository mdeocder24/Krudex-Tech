import { NextResponse, after } from 'next/server';
import { queryD1 } from '@/lib/d1';
import { rateLimit } from '@/lib/rate-limit';
import { verifyTurnstile } from '@/lib/turnstile';
import { notifyConfigured, notifyNewInquiry } from '@/lib/notify';
import { triageInquiry } from '@/lib/ai/triage';
import { clientIp } from '@/lib/ip';

// Field caps keep a single request from writing arbitrarily large rows.
const LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  scope: 400,
  timeline: 40,
  details: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_BODY_BYTES = 16 * 1024;

type Field = keyof typeof LIMITS;

function readField(body: Record<string, unknown>, key: Field): string | null {
  const value = body[key];
  if (value === undefined || value === null) return null;
  if (typeof value !== 'string') throw new FieldError(`Invalid ${key}.`);
  const trimmed = value.trim();
  if (trimmed.length > LIMITS[key]) {
    throw new FieldError(`${key[0].toUpperCase()}${key.slice(1)} must be ${LIMITS[key]} characters or fewer.`);
  }
  return trimmed || null;
}

class FieldError extends Error {}

export async function POST(request: Request) {
  const ip = clientIp(request);

  // 5 inquiries per IP per 10 minutes.
  const limit = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { error: 'Too many inquiries. Please wait a few minutes and try again.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfterSeconds) } }
    );
  }

  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Request is too large.' }, { status: 413 });
    }

    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }
    const data = body as Record<string, unknown>;

    // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
    if (typeof data.website === 'string' && data.website.trim() !== '') {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const turnstileOk = await verifyTurnstile(
      typeof data.turnstileToken === 'string' ? data.turnstileToken : '',
      ip
    );
    if (!turnstileOk) {
      return NextResponse.json(
        { error: 'Verification failed. Please refresh the page and try again.' },
        { status: 400 }
      );
    }

    const name = readField(data, 'name');
    const email = readField(data, 'email')?.toLowerCase() ?? null;
    const company = readField(data, 'company');
    const scope = readField(data, 'scope');
    const timeline = readField(data, 'timeline');
    const details = readField(data, 'details');

    if (!name) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const id = crypto.randomUUID();

    await queryD1(
      `INSERT INTO inquiries (id, name, email, company, scope, timeline, details)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, name, email, company, scope, timeline, details]
    );

    // After the visitor has their answer: AI triage, then the team email.
    // Neither can lose the inquiry, which is already stored.
    after(async () => {
      if (!notifyConfigured()) return;
      const inquiry = { id, name, email, company, scope, timeline, details };
      try {
        await notifyNewInquiry(inquiry, await triageInquiry(inquiry));
      } catch (notifyError) {
        console.error(
          'Inquiry stored but notification email failed:',
          notifyError instanceof Error ? notifyError.message : notifyError
        );
      }
    });

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof FieldError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error submitting inquiry to Cloudflare D1:', message);

    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
