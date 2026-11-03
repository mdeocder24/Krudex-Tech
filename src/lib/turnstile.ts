/**
 * Verifies a Cloudflare Turnstile token server-side.
 *
 * Turnstile is optional: when TURNSTILE_SECRET_KEY is not set, verification is
 * skipped so local development and existing deployments keep working.
 * Set both TURNSTILE_SECRET_KEY and NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable it.
 */
export async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip && ip !== 'unknown') form.append('remoteip', ip);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
      cache: 'no-store',
    });
    if (!res.ok) return false;
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error instanceof Error ? error.message : error);
    return false;
  }
}
