"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ServicesCTA = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black border-t border-krudex-border/80 relative overflow-hidden">
      {/* Background ambient crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-krudex-accent/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Ready to scope your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-krudex-muted">
            next product?
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-krudex-muted text-base sm:text-lg max-w-xl mb-12 leading-relaxed"
        >
          We offer a free 30-minute technical consultation. Bring your constraints &mdash; we&apos;ll bring architecture clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton 
            href="/contact" 
            className="group flex items-center gap-2.5 bg-krudex-accent text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover shadow-[0_0_30px_rgba(229,43,59,0.35)] hover:shadow-[0_0_45px_rgba(229,43,59,0.55)] border border-krudex-accent/60 transition-all duration-300"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
