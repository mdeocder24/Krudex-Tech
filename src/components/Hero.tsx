"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CanvasBackground from './CanvasBackground';

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
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-20 relative">
      <div className="max-w-4xl z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
            INCORPORATED ENGINEERING FIRM &middot; HYDERABAD
          </span>
        </motion.div>

        <motion.h1 
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-white mb-8 perspective-1000"
        >
          <span className="block overflow-hidden">
            {["We", "Build", "Digital"].map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em] origin-bottom">{word}</motion.span>
            ))}
          </span>
          <span className="block overflow-hidden text-krudex-green">
            {["Products", "That"].map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.25em] origin-bottom">{word}</motion.span>
            ))}
          </span>
          <span className="block overflow-hidden text-krudex-green">
            <motion.span variants={wordVariants} className="inline-block origin-bottom">Perform.</motion.span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-krudex-muted text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Krudex Technologies delivers full-stack engineering, AI integration, 
          and precision design for startups and enterprises that need results, 
          not promises.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="group flex items-center gap-2 bg-krudex-green text-krudex-black px-8 py-4 font-semibold text-sm hover:bg-krudex-green-hover transition-colors">
            View Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="group flex items-center gap-2 border border-krudex-border text-white px-8 py-4 font-semibold text-sm hover:border-krudex-green transition-colors">
            Start a Project
            <ArrowRight className="w-4 h-4 text-krudex-green group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* 3D Interactive Background */}
      <CanvasBackground />
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 mix-blend-screen">
         <div className="absolute -top-40 -left-40 w-96 h-96 bg-krudex-green/10 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
