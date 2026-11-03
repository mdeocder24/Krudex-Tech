import { BRAND } from './brand';

/**
 * "KRUDEX / GLOBAL" wordmark from the Cube lockup: ivory KRUDEX over a gold,
 * widely tracked GLOBAL. Every dimension is in em, so the whole mark scales
 * from one font size (the KRUDEX cap size, in px).
 *
 * - `align="start"` (horizontal lockup): GLOBAL is followed by a hairline
 *   that runs to the end of KRUDEX, as in the reference.
 * - `align="center"` (stacked lockup): GLOBAL sits between two hairlines.
 *
 * Reference at 68px: KRUDEX 800 / 0.12em; GLOBAL 600 19px / 0.62em; 10px row
 * gap; 14px hairline gap.
 */
export default function Wordmark({
  align = 'start',
  className = '',
}: {
  align?: 'start' | 'center';
  className?: string;
}) {
  const center = align === 'center';
  const rule = 'h-px flex-1 min-w-[0.3em] bg-krudex-border';
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-col font-sans leading-none ${center ? 'items-center' : 'items-stretch'} ${className}`}
    >
      {/* Trailing tracking would push KRUDEX off-centre; the padding balances it. */}
      <span className={`font-extrabold tracking-[0.12em] text-krudex-white ${center ? 'pl-[0.12em]' : ''}`}>
        {BRAND.wordmark}
      </span>
      <span className="mt-[0.147em] flex w-full items-center gap-[0.206em]">
        {center && <span className={rule} />}
        <span className={`text-[max(0.28em,7px)] font-semibold tracking-[0.62em] text-krudex-accent ${center ? 'pl-[0.62em]' : ''}`}>
          {BRAND.descriptor}
        </span>
        <span className={rule} />
      </span>
    </span>
  );
}
