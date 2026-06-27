"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import TextReveal from './TextReveal';

const MotionA = motion.create ? motion.create('a') : motion('a');

const projects = [
  {
    category: "Enterprise \u00B7 2024",
    title: "Kemplast Inc. \u2014 Frontend Modernization",
    desc: "Rebuilt a legacy React 16 platform on Next.js 16 + React 19 with a Tailwind v4 design system. Lighthouse score moved from 71 to 99. LCP dropped from 2.8s to 0.9s.",
    tags: ["99 Lighthouse", "0.9s LCP", "-47% JS"]
  },
  {
    category: "AI / ML \u00B7 2025",
    title: "Sign Language Recognition Platform",
    desc: "Real-time ASL gesture classification using MediaPipe Hands + TensorFlow.js \u2014 running entirely in-browser. 26 gestures recognized at 94.7% accuracy with 18ms inference.",
    tags: ["94.7% accuracy", "18ms latency", "0 server calls"]
  }
];

const SelectedWork = () => {
  return (
    <section id="our-work" className="px-8 md:px-16 lg:px-24 py-32 bg-krudex-black border-t border-krudex-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-blue"></div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-blue font-semibold">
            SELECTED WORK
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <TextReveal className="font-serif text-5xl md:text-6xl text-white font-bold mb-6 tracking-tight">
            What we've shipped
          </TextReveal>
          <p className="text-krudex-muted text-lg">
            Two of our most technically demanding engagements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TiltCard className="h-full group bg-krudex-card border border-krudex-border p-8 md:p-12 hover:border-krudex-blue/50 transition-colors">
                <div className="text-[10px] text-krudex-blue font-mono uppercase tracking-[0.15em] mb-6">
                  {project.category}
                </div>
                <h3 className="text-xl text-white font-bold mb-4 group-hover:text-krudex-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-krudex-muted text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-krudex-blue border border-krudex-blue/30 bg-krudex-blue/5 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <MagneticButton 
            as="a"
            href="#all-work" 
            className="group flex items-center gap-2 bg-krudex-blue text-krudex-black px-8 py-4 font-semibold text-sm hover:bg-krudex-blue-hover transition-colors"
          >
            See All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
