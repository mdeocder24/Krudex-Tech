"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Award } from 'lucide-react';

const highlights = [
  { icon: Users, label: "Live Engineering Mentorship", desc: "1-on-1 guidance from practicing software engineers building production apps." },
  { icon: Sparkles, label: "Commercial Products", desc: "Contribute code directly to real production applications and user workflows." },
  { icon: Award, label: "Recognized Accreditation", desc: "NovaSkill Hub verified industry credential with portfolio review." },
];

const TrainingHighlight = () => {
  return (
    <section id="student-training" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 border-t border-white/[0.06] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
              <span className="text-xs text-white/60 font-mono tracking-wider uppercase">
                Student Training Program
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight mb-6">
              Learn engineering from <br />
              <span className="text-white/60">
                people who do the work.
              </span>
            </h2>

            <p className="text-krudex-muted text-base leading-relaxed max-w-xl mb-8 font-normal">
              In strategic collaboration with <span className="text-white font-medium">NovaSkill Hub</span>, Krudex delivers intensive student bootcamps covering modern web architectures, AI/ML engineering, and digital growth marketing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#0D0A0C]/80 border border-white/[0.08]">
                    <Icon className="w-4 h-4 text-krudex-accent mb-2.5" />
                    <h4 className="text-white text-xs font-semibold tracking-wide mb-1">{item.label}</h4>
                    <p className="text-krudex-muted text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/training"
              className="group inline-flex items-center gap-3 bg-krudex-accent text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover shadow-[0_1px_2px_rgba(0,0,0,0.5),0_0_20px_rgba(229,43,59,0.25)] hover:shadow-[0_0_35px_rgba(229,43,59,0.45)] transition-all duration-300"
            >
              <span>Explore Student Curriculum</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Interactive Preview Card with Clean Window Chrome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0D0A0C]/85 backdrop-blur-md border border-white/[0.08] p-6 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_-10px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-white/[0.18] transition-colors">
              {/* Visual Cohort Banner Image */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6 border border-white/[0.08] bg-[#070507]">
                <Image
                  src="/images/student-training.webp"
                  alt="Student Training with Industry Experts"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/[0.08]">
                    Cohort 2026
                  </span>
                  <span className="text-[11px] font-mono text-krudex-accent bg-krudex-accent/10 px-2.5 py-0.5 rounded-full border border-krudex-accent/25 font-semibold backdrop-blur-md">
                    Admissions Open
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.05]">
                  <span className="text-krudex-muted font-mono">Format</span>
                  <span className="text-white font-medium">Hybrid / Hands-on Lab</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.05]">
                  <span className="text-krudex-muted font-mono">Partner Hub</span>
                  <span className="text-white font-medium">NovaSkill Hub Accreditation</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.05]">
                  <span className="text-krudex-muted font-mono">Placement Support</span>
                  <span className="text-krudex-accent font-medium">Included with Capstone</span>
                </div>
              </div>

              <Link
                href="/training"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/[0.1] bg-white/[0.03] hover:border-krudex-accent/40 hover:bg-white/[0.06] text-white text-xs font-semibold tracking-wide transition-all"
              >
                <span>View Program Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5 text-krudex-accent" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHighlight;
