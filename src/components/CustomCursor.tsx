"use client";

import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HOVER_SELECTOR = 'a, button, input, textarea, select, [data-cursor-hover], [role="button"], label';

function subscribeFinePointer(callback: () => void) {
  const mql = window.matchMedia('(pointer: fine)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  return window.matchMedia('(pointer: fine)').matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

const CustomCursor = () => {
  const isFinePointer = useSyncExternalStore(subscribeFinePointer, getFinePointerSnapshot, getFinePointerServerSnapshot);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer aura with smooth trailing spring
  const auraX = useSpring(mouseX, { stiffness: 280, damping: 28, mass: 0.3 });
  const auraY = useSpring(mouseY, { stiffness: 280, damping: 28, mass: 0.3 });

  // Inner dot with instant, responsive spring
  const dotX = useSpring(mouseX, { stiffness: 850, damping: 45, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 850, damping: 45, mass: 0.1 });

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as Element | null;
      setIsHovering(!!target?.closest(HOVER_SELECTOR));
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener('pointermove', handleMove);
    document.documentElement.addEventListener('pointerleave', handleLeave);
    document.documentElement.addEventListener('pointerenter', handleEnter);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.documentElement.removeEventListener('pointerleave', handleLeave);
      document.documentElement.removeEventListener('pointerenter', handleEnter);
    };
  }, [isFinePointer, isVisible, mouseX, mouseY]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Outer Halo / Aura */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{ x: auraX, y: auraY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.7 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-10 h-10 border border-krudex-accent/60 bg-krudex-accent/20 shadow-[0_0_20px_rgba(229,43,59,0.4)] backdrop-blur-[1px]'
              : 'w-8 h-8 border border-krudex-accent/30 bg-krudex-accent/5'
          }`}
        />
      </motion.div>

      {/* Inner Precision Laser Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[1000] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0.7 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_10px_#E52B3B]" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
