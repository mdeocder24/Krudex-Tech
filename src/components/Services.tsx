"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Full-Stack Web Platforms",
    desc: "High-throughput portals and SPAs engineered from architecture to CI/CD."
  },
  {
    num: "02",
    title: "Mobile Applications",
    desc: "Cross-platform iOS & Android apps with native performance."
  },
  {
    num: "03",
    title: "AI & ML Integration",
    desc: "Real-time inference pipelines and LLM-powered features in production."
  },
  {
    num: "04",
    title: "UI/UX & Brand Design",
    desc: "Design systems, visual identities, and investor-grade materials."
  }
];

const Services = () => {
  return (
    <section id="services-overview" className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-6 sm:mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-blue"></div>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-krudex-blue font-semibold">
            WHAT WE DO
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              Four disciplines. <br />One partner.
            </h2>
            <p className="text-krudex-muted text-base sm:text-lg leading-relaxed">
              We handle the full stack of a digital product — engineering, AI, and design — under one roof.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-krudex-border/50 border border-krudex-border/50">
            {services.map((svc, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-krudex-black/60 backdrop-blur-md p-6 sm:p-8 md:p-10 hover:bg-krudex-black/80 transition-colors"
              >
                <div className="text-krudex-blue font-mono text-sm mb-4 sm:mb-6">{svc.num}</div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">{svc.title}</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link href="/services" className="group flex items-center gap-2 border border-krudex-blue text-krudex-blue px-6 sm:px-8 py-3.5 sm:py-4 font-semibold text-sm hover:bg-krudex-blue/10 transition-colors">
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
