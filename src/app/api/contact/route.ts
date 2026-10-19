import { NextResponse } from 'next/server';
import { queryD1 } from '@/lib/d1';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, scope, budget, timeline, details } = body;

    // Validation
    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }

    const id = crypto.randomUUID();

    await queryD1(
      `INSERT INTO inquiries (id, name, email, company, scope, budget, timeline, details)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        name.trim(),
        email.trim().toLowerCase(),
        company?.trim() || null,
        scope?.trim() || null,
        budget?.trim() || null,
        timeline?.trim() || null,
        details?.trim() || null,
      ]
    );

    return NextResponse.json({ success: true, id }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error submitting inquiry to Cloudflare D1:', message);

    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
