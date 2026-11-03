/**
 * Best-effort client IP for rate limiting.
 * Headers are only as trustworthy as the proxy in front of the app:
 * x-real-ip is set by Vercel, cf-connecting-ip by Cloudflare.
 */
export function clientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    forwarded?.split(',')[0]?.trim() ||
    'unknown'
  );
}
