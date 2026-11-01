"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Sparkles, BookOpen, Code2, Award } from 'lucide-react';
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
    icon: Code2,
    color: "status-pill-blue",
    title: "SaaS & Web Engineering",
    duration: "12 Weeks",
    text: "Full-stack architecture with Next.js 16, TypeScript, server components, PostgreSQL database modeling, and serverless edge deployments."
  },
  {
    icon: Sparkles,
    color: "status-pill-pink",
    title: "AI & Machine Learning Systems",
    duration: "10 Weeks",
    text: "Production RAG pipelines, custom LLM fine-tuning, computer vision with MediaPipe, and vector search embeddings."
  },
  {
    icon: Award,
    color: "status-pill-orange",
    title: "UI/UX & Design Systems",
    duration: "8 Weeks",
    text: "Atomic design tokens, high-fidelity interactive Figma prototyping, accessibility standards, and modern frontend styling."
  },
  {
    icon: BookOpen,
    color: "status-pill-green",
    title: "Google Ads & Growth Marketing",
    duration: "6 Weeks",
    text: "Search engine campaigns, conversion tracking with GA4, remarketing funnels, technical SEO architecture, and paid customer acquisition."
  }
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-[#7B68EE]/30 selection:text-white flex flex-col">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 md:pb-28 relative z-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#E01E5A]/20 via-[#7B68EE]/20 to-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-[#E01E5A]/10 border border-[#E01E5A]/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                <span className="text-xs uppercase tracking-wider text-[#F472B6] font-mono font-semibold">
                  NovaSkill Hub Collaboration
                </span>
              </div>
              <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.06] tracking-tight mb-6">
                Learn from people <br />
                <span className="clickup-gradient-text">
                  who do the work.
                </span>
              </h1>
              <p className="text-krudex-muted text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
                Krudex Technologies trains ambitious engineering students in strategic collaboration with NovaSkill Hub. Master modern web platforms, AI systems, and digital marketing from active practitioners.
              </p>
              <Link
                href="/contact?interest=training"
                className="clickup-btn-primary px-8 py-4 rounded-xl font-semibold text-sm flex items-center gap-2 group/btn"
              >
                <span>Enquire About Next Cohort</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Visual Header in Engineered Chrome */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="clickup-card p-5 sm:p-6 border border-[#7B68EE]/30 shadow-[0_20px_50px_rgba(123,104,238,0.2)]">
                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-5 border border-white/10 bg-[#070507]">
                  <Image
                    src="/images/student-training.webp"
                    alt="Student Training Workshop"
                    fill
                    className="object-cover brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C1B] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-white bg-black/80 px-2.5 py-1 rounded-full border border-white/10">
                      Hyderabad Engineering Lab
                    </span>
                    <span className="text-[11px] font-mono status-pill-green px-2.5 py-0.5 rounded-full font-bold">
                      NovaSkill Accredited
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70 py-2 border-t border-white/10">
                  <span>Admissions: Accepting Applications</span>
                  <span className="text-[#A78BFA] font-mono font-bold">Batch 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Why Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Practitioner Advantage</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Why train with <span className="clickup-gradient-text">Krudex Academy.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasonsData.map((reason, idx) => (
              <motion.div
                key={reason.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="clickup-card p-8 sm:p-10 hover:border-[#7B68EE]/50 transition-all duration-300 group"
              >
                <div className="text-[#A78BFA] font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#7B68EE]/15 border border-[#7B68EE]/30 w-max mb-6">
                  {reason.num}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#A78BFA] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-krudex-muted text-sm leading-relaxed">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Topics Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Curriculum tracks &amp; syllabus.
            </h2>
            <p className="text-krudex-muted text-base max-w-xl">
              Engineered alongside NovaSkill Hub to match real corporate hiring standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topicsData.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="clickup-card p-7 sm:p-8 hover:border-[#7B68EE]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A78BFA] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${topic.color}`}>
                      {topic.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-krudex-muted text-sm leading-relaxed">{topic.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact?interest=training"
              className="clickup-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Download Detailed Syllabus &amp; Enroll</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
