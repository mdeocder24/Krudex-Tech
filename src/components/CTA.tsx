"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border/50 relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
            READY TO START?
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
        >
          Let's build something <br className="hidden md:block" />
          <span className="text-krudex-green">worth talking about.</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-krudex-muted text-lg max-w-xl mb-12 leading-relaxed"
        >
          Tell us what you're architecting. We'll respond within 24 hours with a clear path forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#consultation" className="group flex items-center gap-2 bg-krudex-green text-krudex-black px-10 py-5 font-semibold text-sm hover:bg-krudex-green-hover transition-colors">
            Initialize Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
