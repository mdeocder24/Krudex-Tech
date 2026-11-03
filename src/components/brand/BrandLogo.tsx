import Image from 'next/image';
import { BRAND } from './brand';

/**
 * The Krudex Global logo (gold KK). Use this everywhere a logo appears.
 *
 * Size it with a text class (e.g. "text-[20px]"): the logo is `height` em
 * tall, so one font size scales it responsively. Default 3em.
 * Inside a link that already has an aria-label, pass `decorative`.
 */
export default function BrandLogo({
  height = 3,
  priority = false,
  decorative = false,
  className = '',
}: {
  /** Logo height in em of the current font size. */
  height?: number;
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex ${className}`}>
      <Image
        src={BRAND.logoSrc}
        alt={decorative ? '' : BRAND.logoAlt}
        width={BRAND.logoWidth}
        height={BRAND.logoHeight}
        priority={priority}
        className="w-auto max-w-none"
        style={{ height: `${height}em` }}
      />
    </span>
  );
}
