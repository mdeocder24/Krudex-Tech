"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const CTA = () => {
  return (
    <section className="px-6 md:px-14 lg:px-20 py-28 md:py-36 relative z-10 overflow-hidden border-t border-white/[0.06]">
      {/* Studio ambient glow behind callout */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-25 blur-[140px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(229, 43, 59, 0.25) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
          <span className="text-xs text-white/60 font-mono tracking-wider uppercase">
            Start Your Engagement
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal mb-6 leading-[1.06] tracking-tight"
        >
          Let&apos;s build your next <br />
          <span className="text-white/60">
            production system.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-krudex-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-normal"
        >
          From initial system architecture to production deployment and customer acquisition—we engineer your vision into a scalable, enterprise-ready reality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap bg-krudex-accent text-white px-8 py-4 text-[14px] font-semibold tracking-wide hover:bg-krudex-accent-hover transition-all rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5),0_0_20px_rgba(229,43,59,0.25)] hover:shadow-[0_0_35px_rgba(229,43,59,0.45)] hover:scale-[1.02]"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>

          <MagneticButton
            href="/services"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap border border-white/[0.12] bg-white/[0.03] text-white/85 px-7 py-4 text-[14px] font-medium tracking-wide hover:border-white/[0.25] hover:bg-white/[0.07] hover:text-white transition-all rounded-full backdrop-blur-sm"
          >
            Explore Services
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
