"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

// Client-only mount to avoid SSR issues with WebGL canvas
const PillarsWrapper = () => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import('./Hero3DObject').then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-10 h-10 border border-krudex-border/40 border-t-white/40 rounded-full animate-spin" />
      </div>
    );
  }

  return <Component />;
};

const GlobeWrapper = () => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import('./GlobeObject').then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) return null;

  return <Component />;
};

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 90 },
  },
};

const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  animate: {
    opacity: 1,
    y: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.7, delay, ease: "easeOut" as any },
  },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center overflow-hidden bg-krudex-black">
      {/* Translucent Globe overlay — bottom left */}
      <div className="absolute bottom-0 left-0 w-[120vw] h-[120vw] lg:w-[50vw] lg:h-[50vw] translate-y-[40%] -translate-x-[20%] opacity-40 pointer-events-none z-0">
        <GlobeWrapper />
      </div>

      {/* Dot grid pattern overlay */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none z-0" />

      {/* ── Left: Text Content ───────────────── */}
      <div className="w-full lg:w-[45%] z-10 flex flex-col justify-center items-start px-8 md:px-14 lg:px-20 pt-32 lg:pt-0 pb-8 lg:pb-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 bg-krudex-surface/80 border border-krudex-border px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#e65c00] animate-pulse" />
          <span className="text-[11px] text-krudex-muted tracking-wide">
            Grow With Us!
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-white mb-7"
        >
          <span className="block overflow-hidden">
            {['Architecting', 'Web', 'And'].map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {['Mobile', 'ecosystems.'].map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeInUp(0.9)}
          className="text-krudex-muted text-[15px] leading-relaxed max-w-md mb-10"
        >
          We help startups and enterprises to build their websites, apps
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUp(1.1)}
          className="flex items-center gap-6"
        >
          <MagneticButton
            href="/contact"
            className="group inline-flex items-center gap-2 bg-white text-krudex-black px-8 py-3.5 text-[14px] font-medium tracking-wide hover:bg-gray-200 transition-colors rounded"
          >
            View Our Work
          </MagneticButton>
          <MagneticButton
            href="/contact"
            className="group inline-flex items-center gap-2 text-krudex-muted hover:text-white text-[13px] font-medium tracking-wide transition-colors"
          >
            Initialize Consultation
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* ── Right: 3D Visualization ──────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="w-full lg:w-[55%] h-[55vh] lg:h-screen relative z-10"
      >
        <PillarsWrapper />

        {/* Ambient glow layer (pillars have their own inner glow) */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c49a3c]/5 blur-[160px] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
