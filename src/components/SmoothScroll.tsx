"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { MotionConfig } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect the OS "reduce motion" setting: keep native scrolling.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.08, // Adjust for smoothness (lower is smoother but slower, 0.08 is a good balance)
      wheelMultiplier: 1.2, // Slightly faster scroll wheel response
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user": framer-motion drops transform/layout animations
  // (keeps opacity) when the OS asks for reduced motion.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
