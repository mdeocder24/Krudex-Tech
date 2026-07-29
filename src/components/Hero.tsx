"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

import dynamic from 'next/dynamic';

// Dynamically import 3D components with SSR disabled to optimize initial load
const Hero3DObject = dynamic(() => import('./Hero3DObject'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 border border-krudex-border/40 border-t-white/40 rounded-full animate-spin" />
    </div>
  )
});

const GlobeObject = dynamic(() => import('./GlobeObject'), {
  ssr: false
});

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
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row items-center overflow-hidden bg-krudex-black">
      {/* Translucent Globe overlay — bottom left */}
      <div className="absolute bottom-0 left-0 w-[120vw] h-[120vw] lg:w-[50vw] lg:h-[50vw] translate-y-[40%] -translate-x-[20%] opacity-40 pointer-events-none z-0">
        <GlobeObject />
      </div>

      {/* Dot grid pattern overlay */}
      <div className="absolute inset-0 dot-grid opacity-100 pointer-events-none z-0" />

      {/* ── Left: Text Content ───────────────── */}
      <div className="w-full lg:w-[45%] z-10 flex flex-col justify-center items-start px-6 md:px-14 lg:px-20 pt-28 md:pt-32 lg:pt-0 pb-4 lg:pb-0">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group inline-flex items-center gap-2.5 bg-krudex-surface/90 border border-white/10 hover:border-[#e65c00]/50 px-3.5 md:px-4 py-1.5 md:py-2 rounded-full mb-6 md:mb-8 shadow-[0_0_20px_rgba(230,92,0,0.15)] transition-all duration-300 cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e65c00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e65c00]"></span>
          </span>
          <span className="text-[11px] md:text-[12px] font-mono text-krudex-muted group-hover:text-white tracking-wide transition-colors">
            Empowering Startups &amp; Enterprise
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-[2.25rem] md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem] font-normal leading-[1.08] tracking-tight text-white mb-5 md:mb-7"
        >
          <span className="block overflow-hidden">
            {['Building', 'Web,', 'App,'].map((word, i) => (
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
            {['&', 'AI', 'Products.'].map((word, i) => (
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
          className="text-krudex-muted text-[14px] md:text-[15px] leading-relaxed max-w-md mb-8 md:mb-10"
        >
          We build high-performance websites, scalable mobile apps, and custom AI integrations so you can focus entirely on scaling your business.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUp(1.1)}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <MagneticButton
            href="/work"
            className="group relative inline-flex items-center justify-center gap-2 bg-white text-krudex-black px-7 md:px-8 py-3.5 md:py-4 text-[13px] md:text-[14px] font-semibold tracking-wide hover:bg-gray-100 transition-all rounded-full shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:scale-[1.02]"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-7 md:px-8 py-3.5 md:py-4 rounded-full border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white text-[13px] md:text-[14px] font-medium tracking-wide transition-all hover:scale-[1.02]"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-[#e65c00] group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* ── Right: 3D Visualization ──────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="w-full lg:w-[55%] h-[45vh] sm:h-[55vh] lg:h-screen relative z-10"
      >
        <Hero3DObject />

        {/* Ambient glow layer (pillars have their own inner glow) */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c49a3c]/5 blur-[160px] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
