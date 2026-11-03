/**
 * Single source of truth for Krudex Global brand assets.
 *
 * Every logo on the site (navbar, footer, hero fallback, 404, social card,
 * structured data) must come from this module or from <BrandLogo/>.
 * `npm run check:brand` fails the build if a logo file is referenced anywhere
 * else, so a rebrand only ever touches this folder.
 *
 * Design reference: design/logo-cube-reference/Cube.dc.html.
 * To regenerate the PNGs after changing the mark, run `npm run brand:render`.
 */
export const BRAND = {
  name: 'Krudex Global',
  wordmark: 'KRUDEX',
  descriptor: 'GLOBAL',
  /** Transparent 1024×1024 render of the Cube mark. */
  markSrc: '/brand/krudex-global-mark.png',
  /** Transparent 512×512 render, for structured data. */
  markSmallSrc: '/brand/krudex-global-mark-512.png',
  /** Transparent render of <BrandLogo variant="stacked" />, for the OG image. */
  lockupSrc: '/brand/krudex-global-lockup.png',
  markAlt: 'Krudex Global symbol: an isometric gold cube with a glowing core',
} as const;

/**
 * Cube mark geometry and palette, from the design reference.
 * The mark is three faces of an isometric cube separated by a hairline gap,
 * with a glowing core where they meet.
 */
export const CUBE = {
  viewBox: '-104 -128 208 242',
  /** width / height of the viewBox. */
  aspect: 208 / 242,
  faces: {
    top: '0,-118 86.6,-68 0,-18 -86.6,-68',
    left: '-92.66,-46.5 -6.06,3.5 -6.06,103.5 -92.66,53.5',
    right: '92.66,-46.5 6.06,3.5 6.06,103.5 92.66,53.5',
  },
  core: { cx: 0, cy: -5, r: 9 },
  color: {
    top: '#F2DFB8',
    left: '#D4B483',
    right: '#8F6C3C',
    core: '#FFC978',
  },
  ink: '#0A0908',
} as const;
