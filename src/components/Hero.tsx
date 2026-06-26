"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yButtons = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="h-screen w-full flex flex-col justify-center items-center px-4 relative overflow-hidden bg-transparent"
    >
      <motion.div 
        style={{ y: yText, opacity }}
        className="max-w-5xl z-10 flex flex-col items-center text-center mt-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-krudex-blue/30 bg-krudex-blue/10 backdrop-blur-md px-6 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-krudex-blue animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-krudex-blue font-semibold">
            Next-Gen Architecture
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight text-white mb-6 mix-blend-difference"
        >
          Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-krudex-blue to-purple-500">Future</span>
          <br /> With Us.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 mix-blend-difference"
        >
          We engineer scalable digital ecosystems using cutting-edge web, mobile, and AI technologies. Experience true interactive design.
        </motion.p>
        
        <motion.div 
          style={{ y: yButtons }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <MagneticButton strength={0.3}>
            <Link href="/work" className="group flex items-center gap-3 bg-white text-black rounded-full px-8 py-4 font-bold text-sm tracking-wide hover:scale-105 transition-transform duration-300">
              Explore Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.2}>
            <Link href="/contact" className="group flex items-center gap-3 bg-transparent border border-white text-white rounded-full px-8 py-4 font-bold text-sm tracking-wide hover:bg-white/10 transition-colors duration-300">
              Initialize Consultation
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-difference"
      >
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
