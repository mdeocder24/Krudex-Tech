"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const CTA = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 py-32 bg-krudex-black relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-krudex-surface/50 border border-krudex-border px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] text-krudex-muted tracking-wide">
            READY TO START
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6 leading-[1.1] tracking-tight"
        >
          Let&apos;s build something<br />extraordinary together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-krudex-muted text-base leading-relaxed max-w-xl mx-auto mb-10"
        >
          From concept to production — we bring the engineering, AI, and design expertise
          to transform your vision into reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <MagneticButton
            as="a"
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-krudex-black px-8 py-4 font-medium text-sm hover:bg-krudex-text transition-colors duration-300"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/services"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white hover:text-krudex-black transition-all duration-300"
          >
            Explore Services
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
