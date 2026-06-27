"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'attentive', style: 'italic' },
  { name: 'coinbase', style: 'normal' },
  { name: 'coinbase', style: 'normal' },
  { name: 'upwork', style: 'italic' },
  { name: 'DocuSign', style: 'normal' },
  { name: 'drips', style: 'italic font-serif' },
  { name: 'NETFLIX', style: 'tracking-[0.3em]' },
  { name: 'braze', style: 'italic font-serif' },
  { name: 'zapier', style: 'normal' },
];

const Partners = () => {
  return (
    <section className="w-full py-10 px-8 md:px-14 lg:px-20 border-t border-krudex-border/30 bg-krudex-black relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-6 gap-x-4"
      >
        {partners.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`text-krudex-muted/50 text-base md:text-lg font-medium select-none ${p.style}`}
          >
            {p.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
