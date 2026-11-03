"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useCan3D } from '@/hooks/useCan3D';
import { BRAND } from './brand';

/**
 * The Gyro symbol. Renders the live, spinning WebGL version when the device
 * can (see useCan3D) and the static PNG otherwise, or until WebGL is ready.
 * Pauses its render loop while off-screen.
 */
export default function GyroMark({
  size = '1em',
  animated = true,
  priority = false,
  decorative = false,
  className = '',
}: {
  /** CSS length (px number or e.g. "2.4em"). */
  size?: number | string;
  animated?: boolean;
  priority?: boolean;
  /** True when a parent already labels the logo (e.g. a "home" link). */
  decorative?: boolean;
  className?: string;
}) {
  const can3D = useCan3D();
  const live = animated && can3D === true;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!live || !canvasRef.current) return;
    const canvas = canvasRef.current;
    let handle: import('./gyroScene').GyroHandle | null = null;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    import('./gyroScene').then(({ createGyro }) => {
      if (cancelled) return;
      handle = createGyro(canvas, { animate: true });
      setReady(true);
      observer = new IntersectionObserver(([entry]) => handle?.setActive(entry.isIntersecting));
      observer.observe(canvas);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      handle?.dispose();
    };
  }, [live]);

  const label = decorative ? undefined : BRAND.markAlt;

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
      role={decorative ? undefined : 'img'}
      aria-label={label}
      aria-hidden={decorative || undefined}
    >
      {!ready && (
        <Image
          src={BRAND.markSrc}
          alt=""
          width={512}
          height={512}
          sizes="(min-width: 1024px) 256px, 160px"
          priority={priority}
          className="absolute inset-0 h-full w-full"
        />
      )}
      {live && (
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </span>
  );
}
