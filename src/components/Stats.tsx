"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Across web, mobile, and AI disciplines"
  },
  {
    value: "99",
    label: "Lighthouse Score",
    description: "Performance standard on every delivery"
  },
  {
    value: "3x",
    label: "Average Performance Gain",
    description: "Over client's existing systems"
  }
];

const Stats = () => {
  return (
    <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-b border-krudex-border/50 bg-krudex-black/40 backdrop-blur-xl relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-krudex-border/50">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col ${index !== 0 ? 'md:pl-12' : ''} pt-8 md:pt-0`}
          >
            <div className="font-serif text-5xl md:text-6xl text-krudex-green font-medium mb-4">
              {stat.value}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{stat.label}</h3>
            <p className="text-krudex-muted text-sm">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
