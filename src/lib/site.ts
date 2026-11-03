/**
 * Canonical site settings shared by metadata, sitemap, robots and JSON-LD.
 *
 * Set NEXT_PUBLIC_SITE_URL to the production origin (for example
 * https://www.example.com). On Vercel it falls back to the production domain.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = 'Krudex Global';
export const CONTACT_EMAIL = 'krudextechnologies@gmail.com';
export const PHONES = ['+918978261053', '+919490248160'] as const;
export const WHATSAPP_NUMBER = '918978261053';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Krudex, I found you on your website and would like to talk.'
)}`;

/** Public routes, used by the sitemap. */
export const ROUTES = [
  { path: '/', priority: 1 },
  { path: '/services', priority: 0.9 },
  { path: '/training', priority: 0.8 },
  { path: '/about', priority: 0.7 },
  { path: '/our-team', priority: 0.6 },
  { path: '/contact', priority: 0.8 },
  { path: '/privacy', priority: 0.2 },
  { path: '/terms', priority: 0.2 },
] as const;
