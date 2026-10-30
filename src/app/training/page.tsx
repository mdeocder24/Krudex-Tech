"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const reasonsData = [
  {
    num: "01",
    title: "Taught by practicing engineers",
    text: "Learn directly from practitioners who write production code and manage live infrastructure daily. Every architecture and tool taught is what the industry actually uses."
  },
  {
    num: "02",
    title: "Backed by active product repos",
    text: "Krudex builds commercial SaaS platforms and manages scaled advertising funnels. You get hands-on experience on live pull requests and production staging environments."
  },
  {
    num: "03",
    title: "Accredited with NovaSkill Hub",
    text: "Strategic academic partnership with NovaSkill Hub ensuring structured syllabi, verified milestone reviews, and accredited certifications."
  }
];

const topicsData = [
  {
    title: "SaaS & Web Engineering",
    text: "Full-stack architecture with Next.js 16, TypeScript, server components, PostgreSQL database modeling, and serverless edge deployments."
  },
  {
    title: "AI & Machine Learning Systems",
    text: "Production RAG pipelines, custom LLM fine-tuning, computer vision with MediaPipe, and vector search embeddings."
  },
  {
    title: "UI/UX & Design Systems",
    text: "Atomic design tokens, high-fidelity interactive Figma prototyping, accessibility standards, and modern frontend styling."
  },
  {
    title: "Google Ads & Growth Marketing",
    text: "Search engine campaigns, conversion tracking with GA4, remarketing funnels, technical SEO architecture, and paid customer acquisition."
  }
];

const stepsData = [
  "Send an enquiry and choose your target learning tracks.",
  "We reply within one business day with the detailed syllabus.",
  "Confirm your cohort seat, access live schedules, and begin training."
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-accent selection:text-white flex flex-col">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24 md:pb-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 border border-white/[0.08] px-3.5 py-1.5 mb-8 rounded-full bg-white/[0.03]">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
                <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-mono">
                  Student Training Program
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.06] tracking-tight mb-6">
                <span className="text-white">Learn from people</span><br />
                <span className="text-white/60">
                  who do the work.
                </span>
              </h1>
              <p className="text-krudex-muted text-lg leading-relaxed max-w-xl mb-8 font-normal">
                Krudex Technologies trains ambitious engineering students in strategic collaboration with NovaSkill Hub. Master modern web platforms, AI systems, and digital marketing from active practitioners.
              </p>
              <Link
                href="/contact?interest=training"
                className="group flex items-center gap-2.5 bg-krudex-accent text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover shadow-[0_1px_2px_rgba(0,0,0,0.5),0_0_20px_rgba(229,43,59,0.25)] hover:shadow-[0_0_35px_rgba(229,43,59,0.45)] transition-all duration-300"
              >
                <span>Enquire About Next Cohort</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Visual Header in Engineered Chrome */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-[#0D0A0C]/85 backdrop-blur-md border border-white/[0.08] p-5 sm:p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_15px_40px_-10px_rgba(0,0,0,0.6)]">
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-5 border border-white/[0.08] bg-[#070507]">
                  <Image
                    src="/images/student-training.webp"
                    alt="Student Training Workshop"
                    fill
                    className="object-cover brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-white bg-black/75 px-2.5 py-1 rounded-full border border-white/[0.08]">
                      Hyderabad Engineering Lab
                    </span>
                    <span className="text-[11px] font-mono text-krudex-accent bg-krudex-accent/10 px-2.5 py-0.5 rounded-full border border-krudex-accent/25 font-semibold">
                      NovaSkill Hub
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70 py-2 border-t border-white/[0.06]">
                  <span>Status: Accepting Applications</span>
                  <span className="text-krudex-accent font-mono font-medium">Batch 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-white/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl sm:text-5xl text-white font-normal mb-16 leading-[1.1]"
          >
            Why train with Krudex.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasonsData.map((reason, idx) => (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                className="group rounded-2xl bg-[#0D0A0C]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.18] p-8 sm:p-10 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="text-krudex-accent font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-krudex-accent/10 border border-krudex-accent/20 w-max mb-6">
                  {reason.num}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
                <p className="text-krudex-muted text-sm leading-relaxed font-normal">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Topics Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-white/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl sm:text-5xl text-white font-normal mb-16 leading-[1.1]"
          >
            Curriculum tracks.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topicsData.map((topic, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D0A0C]/80 backdrop-blur-md border border-white/[0.08] p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
                  <h3 className="text-white font-semibold text-lg">{topic.title}</h3>
                </div>
                <p className="text-krudex-muted text-sm leading-relaxed font-normal">{topic.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
