import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { clientIp } from '@/lib/ip';

/**
 * Shared server-side setup for every AI feature on the site.
 *
 * Server only: imports the API key from the environment. Never import this
 * from a client component.
 *
 * Env:
 *   ANTHROPIC_API_KEY   required; without it every AI route answers 503 and
 *                       the UI hides or degrades gracefully.
 *   KRUDEX_AI_MODEL     optional; defaults to Claude Opus 5.5. Set
 *                       "claude-haiku-5-5" for much lower cost per request.
 */

export const AI_MODEL = process.env.KRUDEX_AI_MODEL || 'claude-opus-5-5';

export function aiEnabled(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

let client: Anthropic | null = null;
export function claude(): Anthropic {
  if (!client) {
    // Short timeout and a single retry: a website visitor is waiting.
    client = new Anthropic({ timeout: 45_000, maxRetries: 1 });
  }
  return client;
}

/** Models that accept server-side refusal fallbacks (`fallbacks: "default"`). */
const FALLBACK_MODELS = new Set(['claude-opus-5-5', 'claude-opus-5', 'claude-sonnet-5-5', 'claude-fable-5-1']);

/**
 * Request fields every AI call shares: the model, low effort (these are short,
 * customer-facing answers, not deep reasoning), and refusal fallbacks where
 * the model supports them.
 */
export function baseRequest() {
  const fallback = FALLBACK_MODELS.has(AI_MODEL);
  return {
    model: AI_MODEL,
    ...(fallback
      ? { betas: ['server-side-fallback-2026-07-01' as const], fallbacks: 'default' as const }
      : {}),
  };
}

export const LOW_EFFORT = { effort: 'low' as const };

/**
 * Common guard for AI routes: feature enabled, per-IP rate limit, body size
 * cap and JSON parse. Returns the parsed body, or a Response to send back.
 */
export async function guardAiRequest(
  request: Request,
  opts: { key: string; max: number; windowMs: number; maxBytes: number }
): Promise<{ body: Record<string, unknown> } | { response: Response }> {
  if (!aiEnabled()) {
    return { response: NextResponse.json({ error: 'AI features are not available right now.' }, { status: 503 }) };
  }

  const limit = rateLimit(`${opts.key}:${clientIp(request)}`, opts.max, opts.windowMs);
  if (!limit.ok) {
    return {
      response: NextResponse.json(
        { error: 'You have reached the limit for now. Please try again in a few minutes.' },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfterSeconds) } }
      ),
    };
  }

  const raw = await request.text();
  if (raw.length > opts.maxBytes) {
    return { response: NextResponse.json({ error: 'Request is too large.' }, { status: 413 }) };
  }
  try {
    const body = JSON.parse(raw);
    if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('not an object');
    return { body: body as Record<string, unknown> };
  } catch {
    return { response: NextResponse.json({ error: 'Invalid request.' }, { status: 400 }) };
  }
}

/** Trimmed string field with a length cap, or null. */
export function textField(body: Record<string, unknown>, key: string, max: number): string | null {
  const v = body[key];
  if (typeof v !== 'string') return null;
  const t = v.trim();
  if (!t) return null;
  return t.slice(0, max);
}

/** Map SDK errors to a visitor-safe response, logging the detail server-side. */
export function aiErrorResponse(error: unknown, where: string): Response {
  if (error instanceof Anthropic.RateLimitError) {
    console.error(`[ai:${where}] rate limited by API`);
    return NextResponse.json({ error: 'We are a little busy. Please try again in a minute.' }, { status: 503 });
  }
  if (error instanceof Anthropic.APIError) {
    console.error(`[ai:${where}] API error ${error.status}: ${error.message}`);
  } else {
    console.error(`[ai:${where}]`, error instanceof Error ? error.message : error);
  }
  return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
}

export const REFUSAL_MESSAGE =
  "I can't help with that here. For anything about Krudex's services, training or a project, ask away, or contact the team directly.";
