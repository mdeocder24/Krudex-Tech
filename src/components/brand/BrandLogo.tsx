import CubeGlyph from './CubeGlyph';
import Wordmark from './Wordmark';
import { BRAND } from './brand';

type Variant = 'horizontal' | 'stacked';

/**
 * The Krudex Global logo. Use this everywhere a logo appears.
 *
 * - `horizontal`: Cube mark left, wordmark right, as in the reference lockup.
 *   Navbar and footer.
 * - `stacked`: mark above a centred wordmark. Hero fallback, social card.
 *
 * `size` is the KRUDEX cap size (px number). Omit it and set a text size via
 * `className` (e.g. "text-[15px] lg:text-[19px]") for a responsive logo:
 * every part is sized in em.
 * The mark is static SVG here; the live 3D version is <CubeMark/>.
 * Inside a link that already has an aria-label, pass `decorative`.
 */
export default function BrandLogo({
  variant = 'horizontal',
  size,
  decorative = false,
  className = '',
}: {
  variant?: Variant;
  size?: number;
  /** Kept for call-site compatibility; the SVG mark needs no preloading. */
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  const stacked = variant === 'stacked';
  // Reference lockup at a 68px wordmark: 130px-tall mark, 32px gap.
  const markHeight = stacked ? '3.2em' : '1.91em';

  return (
    <span
      className={`inline-flex items-center ${stacked ? 'flex-col gap-[0.5em]' : 'flex-row gap-[0.47em]'} ${className}`}
      style={size ? { fontSize: size } : undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : BRAND.name}
    >
      <CubeGlyph height={markHeight} />
      <Wordmark align={stacked ? 'center' : 'start'} />
    </span>
  );
}
