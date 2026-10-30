"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';
import MagneticButton from './MagneticButton';
import dynamic from 'next/dynamic';

// Dynamically import 3D components with SSR disabled
const Hero3DObject = dynamic(() => import('./Hero3DObject'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border border-white/10 border-t-krudex-accent rounded-full animate-spin" />
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
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 24, stiffness: 100 },
  },
};

const fadeInUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  },
});

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full flex flex-col lg:flex-row items-center overflow-hidden">
      {/* Translucent Globe overlay — bottom left background */}
      <div className="absolute bottom-0 left-0 w-[120vw] h-[120vw] lg:w-[48vw] lg:h-[48vw] translate-y-[45%] -translate-x-[22%] opacity-30 pointer-events-none z-0">
        <GlobeObject />
      </div>

      {/* ── Left: Executive Text Content ───────────────── */}
      <div className="w-full lg:w-[50%] z-10 flex flex-col justify-center items-start px-6 md:px-14 lg:px-20 pt-32 md:pt-36 lg:pt-0 pb-12 lg:pb-0">
        {/* Subtle Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="group inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] px-3.5 py-1.5 rounded-full mb-6 transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_8px_#E52B3B]" />
          <span className="text-[11px] sm:text-xs font-mono text-white/70 group-hover:text-white tracking-wide transition-colors">
            SaaS Engineering · Performance Marketing · Training
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-[2.75rem] md:text-[4rem] lg:text-[4.25rem] xl:text-[4.75rem] font-semibold leading-[1.04] tracking-tight text-white mb-5 md:mb-6"
        >
          <span className="block overflow-hidden">
            {['We', 'build', 'SaaS'].map((word, i) => (
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
            {['products', 'that', 'scale.'].map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`inline-block mr-[0.22em] ${
                  word === 'scale.'
                    ? 'text-krudex-accent font-semibold drop-shadow-[0_0_25px_rgba(229,43,59,0.3)]'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Executive Subtitle */}
        <motion.p
          {...fadeInUp(0.7)}
          className="text-krudex-muted text-[15px] md:text-[16px] leading-relaxed max-w-lg mb-8 md:mb-10 font-normal"
        >
          Krudex Technologies designs and engineers high-throughput SaaS platforms, scales customer acquisition with performance digital marketing, and mentors engineering talent in collaboration with NovaSkill Hub.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUp(0.85)}
          className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10"
        >
          <MagneticButton
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap bg-krudex-accent text-white px-7 py-3.5 text-[14px] font-semibold tracking-wide hover:bg-krudex-accent-hover transition-all rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5),0_0_20px_rgba(229,43,59,0.25)] hover:shadow-[0_0_35px_rgba(229,43,59,0.45)] hover:scale-[1.02]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton
            href="/training"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/[0.12] bg-white/[0.03] text-white/85 px-6 py-3.5 text-[14px] font-medium tracking-wide hover:border-white/[0.25] hover:bg-white/[0.07] hover:text-white transition-all rounded-full backdrop-blur-sm"
          >
            Student Training
          </MagneticButton>
        </motion.div>

        {/* Executive Credibility Bar */}
        <motion.div
          {...fadeInUp(1.0)}
          className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.06] text-xs text-white/50"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-krudex-accent" />
            <span>Enterprise SLA & Clean IP</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-krudex-accent" />
            <span>Full-Stack & Cloud Architecture</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-krudex-accent" />
            <span>NovaSkill Hub Certified</span>
          </div>
        </motion.div>
      </div>

      {/* ── Right: 3D Isometric Architecture ──────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="w-full lg:w-[50%] h-[45vh] sm:h-[55vh] lg:h-screen relative z-10"
      >
        <Hero3DObject />
      </motion.div>
    </section>
  );
};

export default Hero;
