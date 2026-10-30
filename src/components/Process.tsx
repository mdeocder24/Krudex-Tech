"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "A focused technical session to analyze your architecture requirements, user workloads, and core product constraints.",
  },
  {
    num: "02",
    title: "System Architecture & SOW",
    desc: "Comprehensive engineering blueprints, API contracts, and an unambiguous milestone schedule locked in before writing code.",
  },
  {
    num: "03",
    title: "Senior-Led Build Sprints",
    desc: "The exact architects who designed your system build it in rapid, test-covered milestones against measurable production criteria.",
  },
  {
    num: "04",
    title: "Deployment & Scale",
    desc: "Zero-downtime release pipelines, monitoring alerts, full IP handover, a 30-day warranty, and ongoing scale retainer.",
  },
];

const assurances = [
  "100% IP & Full Source Code Transfer",
  "Guaranteed Response within 1 Business Day",
  "30-Day Comprehensive Code Warranty",
  "Zero Lock-in to Proprietary Frameworks",
];

const Process = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 border-t border-white/[0.06] relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
          <span className="text-xs text-white/60 font-mono tracking-wider uppercase">
            Delivery Methodology
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6 leading-[1.08] tracking-tight">
            From technical blueprint <br />
            <span className="text-white/60">
              to production launch.
            </span>
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed font-normal">
            A rigorous engineering process for every engagement. Scope, timeline, and ownership are 100% transparent from day one.
          </p>
        </motion.div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((step, index) => {
            const isHovered = activeStep === index;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative rounded-2xl bg-[#0D0A0C]/80 backdrop-blur-md border p-7 flex flex-col justify-between transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] ${
                  isHovered
                    ? 'border-white/[0.22] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] -translate-y-1'
                    : 'border-white/[0.08] hover:border-white/[0.18]'
                }`}
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className={`font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors ${
                      isHovered
                        ? 'bg-krudex-accent text-white'
                        : 'bg-white/[0.04] text-krudex-accent border border-krudex-accent/20'
                    }`}
                  >
                    PHASE {step.num}
                  </span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isHovered ? 'bg-krudex-accent shadow-[0_0_8px_#E52B3B]' : 'bg-white/20'
                    }`}
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-krudex-muted text-sm leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Assurances Pill Ribbon */}
        <div className="rounded-2xl bg-[#0D0A0C]/60 border border-white/[0.08] p-6 md:p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {assurances.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-krudex-accent/10 border border-krudex-accent/25 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-krudex-accent" />
                </div>
                <span className="text-xs sm:text-sm text-white/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
