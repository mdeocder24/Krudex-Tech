import { BRAND } from './brand';

/**
 * "KRUDEX / GLOBAL" wordmark: chrome lettering with an extruded shadow over a
 * gold descriptor between hairlines. Every dimension is in em, so the whole
 * mark scales from one font size (the KRUDEX cap size, in px).
 */
export default function Wordmark({ size = '1em', className = '' }: { size?: number | string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-col items-center font-sans leading-none ${className}`}
      style={{ fontSize: size }}
    >
      <span className="relative inline-block font-extrabold tracking-[0.16em] pl-[0.16em]">
        <span className="kx-depth absolute left-0 top-0 pl-[0.16em]">{BRAND.wordmark}</span>
        <span className="kx-chrome relative">{BRAND.wordmark}</span>
      </span>
      <span className="mt-[0.19em] flex items-center gap-[0.22em]">
        <span className="h-px w-[0.78em] bg-gradient-to-r from-krudex-accent/0 to-krudex-accent" />
        <span className="kx-gold font-extrabold text-[max(0.305em,7px)] tracking-[0.62em] pl-[0.62em]">{BRAND.descriptor}</span>
        <span className="h-px w-[0.78em] bg-gradient-to-r from-krudex-accent to-krudex-accent/0" />
      </span>
    </span>
  );
}
