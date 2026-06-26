"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 100 }
  }
};

const Hero = () => {
  return (
    <section className="min-h-[100dvh] w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl z-10 flex flex-col items-center text-center pt-24 sm:pt-20 md:pt-20">
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-krudex-border/50 px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 md:mb-8"
        >
          <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-krudex-blue font-semibold">
            HYDERABAD &middot; TELANGANA &middot; INDIA
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[1.1] sm:leading-[1.05] tracking-tight text-white mb-6 sm:mb-8 md:mb-12"
          style={{ perspective: "1000px" }}
        >
          <span className="block overflow-hidden mb-1 sm:mb-2">
            {["Architecting", "Scalable"].map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.2em] sm:mr-[0.25em] origin-bottom">{word}</motion.span>
            ))}
          </span>
          <span className="block overflow-hidden text-krudex-blue mb-1 sm:mb-2">
            {["Web", "&"].map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.2em] sm:mr-[0.25em] origin-bottom">{word}</motion.span>
            ))}
          </span>
          <span className="block overflow-hidden text-krudex-blue mb-1 sm:mb-2">
            <motion.span variants={wordVariants} className="inline-block origin-bottom">Mobile</motion.span>
          </span>
          <span className="block overflow-hidden text-krudex-blue">
            <motion.span variants={wordVariants} className="inline-block origin-bottom">Ecosystems.</motion.span>
          </span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 w-full sm:w-auto"
        >
          <a href="/work" className="group flex items-center justify-center gap-3 border border-krudex-border text-white w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 font-semibold text-xs tracking-[0.1em] hover:border-krudex-blue transition-colors">
            VIEW OUR WORK
            <ArrowRight className="w-4 h-4 text-krudex-muted group-hover:text-krudex-blue group-hover:translate-x-1 transition-all" />
          </a>
          <a href="/contact" className="group flex items-center justify-center gap-2 bg-krudex-blue text-krudex-black w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 font-bold text-xs tracking-[0.1em] hover:bg-krudex-blue-hover transition-colors shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            INITIALIZE CONSULTATION
          </a>
        </motion.div>

        {/* Subtitle Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-krudex-muted/80 text-xs sm:text-sm max-w-2xl leading-relaxed px-2 sm:px-4"
        >
          Krudex Technologies is an incorporated engineering firm operating at the
          intersection of robust software architecture, intelligent AI systems, and
          precision digital design.
        </motion.p>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-6 sm:h-8 md:h-12 bg-gradient-to-b from-krudex-border/0 via-krudex-border to-krudex-border/0 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-krudex-blue"
          />
        </div>
        <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-krudex-muted font-mono">SCROLL</span>
      </motion.div>

      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 mix-blend-screen">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-krudex-blue/5 blur-[100px] sm:blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
