import { NextResponse } from 'next/server';
import { aiEnabled } from '@/lib/ai/claude';

// Tells the browser whether AI features are switched on (API key present),
// so the UI can hide them instead of failing. Read at request time.
export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.json({ enabled: aiEnabled() }, { headers: { 'Cache-Control': 'no-store' } });
}
