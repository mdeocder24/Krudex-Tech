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
export { BRAND } from '@/components/brand/brand';
import { BRAND } from '@/components/brand/brand';
export const SITE_NAME = BRAND.name;
export const CONTACT_EMAIL = 'krudextechnologies@gmail.com';
export const PHONES = ['+917207363444'] as const;
/** How the phone number is shown on the page. */
export const PHONE_DISPLAY = '+91 72073 63444';
export const WHATSAPP_NUMBER = '917207363444';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi Krudex, I found you on your website and would like to talk.'
)}`;

/**
 * Public, indexable routes, used by the sitemap.
 *
 * `lastModified` is the date the page's content last changed. Update it when
 * you edit a page: search engines ignore the field if it changes on every
 * deploy without the content changing.
 */
export const ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'weekly', lastModified: '2026-11-05' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-11-05' },
  { path: '/training', priority: 0.8, changeFrequency: 'weekly', lastModified: '2026-11-05' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-11-09' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-11-04' },
  { path: '/our-team', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-11-05' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly', lastModified: '2026-11-09' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly', lastModified: '2026-11-03' },
] as const;
