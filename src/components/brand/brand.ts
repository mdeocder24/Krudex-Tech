/**
 * Single source of truth for Krudex Global brand assets.
 *
 * Every logo on the site (navbar, footer, hero fallback, 404, social card,
 * structured data) must come from this module or from <BrandLogo/>.
 * `npm run check:brand` fails the build if a logo file is referenced anywhere
 * else, so a rebrand only ever touches this folder.
 *
 * To regenerate the PNGs after changing gyroScene.ts, see README → "Brand assets".
 */
export const BRAND = {
  name: 'Krudex Global',
  wordmark: 'KRUDEX',
  descriptor: 'GLOBAL',
  /** Transparent 1024×1024 still of the Gyro symbol. */
  markSrc: '/brand/krudex-global-mark.png',
  /** Transparent 512×512 still, for structured data and the OG image. */
  markSmallSrc: '/brand/krudex-global-mark-512.png',
  markAlt: 'Krudex Global symbol: chrome and gold orbit rings around a glass sphere with a glowing core',
} as const;
