"use client";

import { useEffect, useRef, useState } from 'react';
import { useCan3D } from '@/hooks/useCan3D';
import CubeGlyph from './CubeGlyph';
import { BRAND, CUBE } from './brand';

/**
 * The Cube symbol, live in 3D. Shows the flat SVG mark first (and for good on
 * reduced-motion, Save-Data or low-end devices, see useCan3D), then crossfades
 * to the WebGL render, which starts from the same silhouette. Pauses its
 * render loop while off-screen.
 *
 * One WebGL context per instance: use it for a single hero moment (the 404),
 * not in repeated chrome like the navbar. Elsewhere use <CubeGlyph/>.
 */
export default function CubeMark({
  height = '1em',
  decorative = false,
  className = '',
}: {
  /** CSS length (px number or e.g. "clamp(96px, 22vw, 180px)"). */
  height?: number | string;
  /** True when a parent already labels the logo. */
  decorative?: boolean;
  className?: string;
}) {
  const live = useCan3D() === true;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!live || !canvasRef.current) return;
    const canvas = canvasRef.current;
    let handle: import('./cubeScene').CubeHandle | null = null;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    import('./cubeScene').then(({ createCube }) => {
      if (cancelled) return;
      handle = createCube(canvas, { animate: true });
      // Wait one frame so the first render is on screen before crossfading.
      requestAnimationFrame(() => !cancelled && setReady(true));
      observer = new IntersectionObserver(([entry]) => handle?.setActive(entry.isIntersecting));
      observer.observe(canvas);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      handle?.dispose();
    };
  }, [live]);

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ height, aspectRatio: `${CUBE.aspect}` }}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : BRAND.markAlt}
      aria-hidden={decorative || undefined}
    >
      <CubeGlyph
        height="100%"
        className={`transition-opacity duration-300 ease-out ${ready ? 'opacity-0' : 'opacity-100'}`}
      />
      {live && (
        // The 3D scene is square and needs margin for the plates to swing out;
        // in the reference a 300px canvas frames a 230px-wide flat mark.
        <canvas
          ref={canvasRef}
          className={`pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130.4%] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ease-out ${ready ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </span>
  );
}
