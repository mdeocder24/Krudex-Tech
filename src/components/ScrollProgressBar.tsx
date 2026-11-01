"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] origin-left z-[100] shadow-[0_0_15px_rgba(123,104,238,0.8)] pointer-events-none"
    />
  );
}
