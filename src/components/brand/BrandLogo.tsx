import GyroMark from './GyroMark';
import Wordmark from './Wordmark';
import { BRAND } from './brand';

type Variant = 'horizontal' | 'stacked';

/**
 * The Krudex Global logo. Use this everywhere a logo appears.
 *
 * - `horizontal`: symbol left, wordmark right. Navbar and footer.
 * - `stacked`: symbol above wordmark, as in the design reference. Heroes, 404.
 *
 * `size` is the KRUDEX cap size (px number). Omit it and set a text size via
 * `className` (e.g. "text-[15px] lg:text-[19px]") for a responsive logo:
 * every part is sized in em.
 * `animated` spins the 3D symbol on capable devices; it is off by default
 * because a WebGL context per logo is expensive.
 * Inside a link that already has an aria-label, pass `decorative`.
 */
export default function BrandLogo({
  variant = 'horizontal',
  size,
  animated = false,
  priority = false,
  decorative = false,
  className = '',
}: {
  variant?: Variant;
  size?: number;
  animated?: boolean;
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  const stacked = variant === 'stacked';
  // Proportions from the design reference: 440px symbol over a 72px wordmark.
  const markSize = stacked ? '6.1em' : '2.4em';

  return (
    <span
      className={`inline-flex items-center ${stacked ? 'flex-col gap-[0.25em]' : 'flex-row gap-[0.45em]'} ${className}`}
      style={size ? { fontSize: size } : undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : BRAND.name}
    >
      <GyroMark size={markSize} animated={animated} priority={priority} decorative />
      <Wordmark />
    </span>
  );
}
