"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ServicesCTA = () => {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Ready to scope your <br /> project?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-krudex-muted text-lg max-w-xl mb-12 leading-relaxed"
        >
          We offer a free 30-minute technical consultation. Bring your requirements \u2014 we'll bring clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton 
            as="a"
            href="#book" 
            className="group flex items-center gap-2 bg-krudex-blue text-krudex-black px-8 py-4 font-semibold text-sm hover:bg-krudex-blue-hover transition-colors"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
