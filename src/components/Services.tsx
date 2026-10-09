"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const services = [
  {
    num: "01",
    title: "SaaS & Web Platforms",
    desc: "SaaS products, customer portals, and web apps built to scale with your user base."
  },
  {
    num: "02",
    title: "Mobile Applications",
    desc: "Cross-platform iOS & Android apps designed for speed, native feel, and maximum retention."
  },
  {
    num: "03",
    title: "AI Integrations",
    desc: "Production-ready custom LLMs, RAG knowledge bases, and secure agentic workflows backed by SOC 2 compliance readiness and data sovereignty."
  },
  {
    num: "04",
    title: "UI/UX & MVP Design",
    desc: "Fast-moving design sprints to get your Minimum Viable Product (MVP) looking premium from day one."
  }
];

const Services = () => {
  return (
    <section id="services-overview" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 bg-krudex-black relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-krudex-surface/50 border border-krudex-border px-4 py-2 rounded-full mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
          <span className="text-[11px] text-krudex-muted tracking-wide">
            WHAT WE DO
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white font-normal mb-6 leading-[1.1] tracking-tight">
              Your SaaS <br /> Technical Partner.
            </h2>
            <p className="text-krudex-muted text-base leading-relaxed">
              We handle the end-to-end technical heavy lifting—from MVP to scalable product—so you can focus on your users.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-krudex-border border border-krudex-border">
            {services.map((svc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ backgroundColor: '#111111' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-krudex-black p-8 md:p-10"
              >
                <div className="text-krudex-muted font-mono text-sm mb-6">{svc.num}</div>
                <h3 className="text-white font-medium text-lg mb-3">{svc.title}</h3>
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
          <MotionLink
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium text-sm hover:bg-white hover:text-krudex-black transition-all duration-300"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
