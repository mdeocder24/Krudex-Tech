"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Code2, Megaphone, GraduationCap, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pillarsData = [
  {
    id: 'saas',
    icon: Code2,
    badge: 'CORE ENGINE',
    title: 'SaaS Engineering',
    headline: 'Architected for scale. Built to run without refactoring.',
    desc: 'We design and build production-grade web platforms with typed end-to-end architectures, automated CI/CD pipelines, and audited sub-second load times. We deliver working production software, not prototypes.',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100', sub: 'Audited Performance' },
      { label: 'Latency Budget', value: '< 200ms', sub: 'Global Edge Delivery' },
      { label: 'IP Ownership', value: '100%', sub: 'Source Code Handover' },
    ],
    highlights: [
      'Next.js 16 App Router & Server Components architecture',
      'FastAPI & Node.js backends with typed OpenAPI contracts',
      'PostgreSQL database design with pooling and caching',
      'Zero vendor lock-in with standard Docker containers',
    ],
    ctaText: 'Explore Engineering Solutions',
    href: '/services',
  },
  {
    id: 'marketing',
    icon: Megaphone,
    badge: 'ACQUISITION',
    title: 'Digital Marketing & Ads',
    headline: 'Data-driven growth. Every rupee tracked to customer revenue.',
    desc: 'We treat marketing spend as an engineering discipline. Performance Google Ads, SEO content architecture, conversion rate optimization (CRO), and GA4 event attribution built directly into your platform.',
    metrics: [
      { label: 'Average ROAS', value: '4.2x', sub: 'Targeted Campaigns' },
      { label: 'Setup Time', value: '7 Days', sub: 'Fast Ramp-Up' },
      { label: 'Attribution', value: 'GA4 Verified', sub: 'Full Funnel Clarity' },
    ],
    highlights: [
      'Search & Performance Max campaign architecture',
      'Conversion-optimized landing pages with A/B testing',
      'Technical and programmatic SEO for organic pipeline',
      'Custom conversion event telemetry and dashboards',
    ],
    ctaText: 'Explore Growth Marketing',
    href: '/services#digital-marketing',
  },
  {
    id: 'training',
    icon: GraduationCap,
    badge: 'ACADEMY',
    title: 'Student Training',
    headline: 'Practitioner-led education alongside NovaSkill Hub.',
    desc: 'Students learn from engineers who ship production code daily, not from textbook instructors. Intensive project-based tracks covering full-stack web development, cloud fundamentals, DSA, and capstone mentoring.',
    metrics: [
      { label: 'Students Mentored', value: '500+', sub: 'High Placement Rate' },
      { label: 'Mentor Ratio', value: '1:15', sub: 'Intensive Mentorship' },
      { label: 'Partnership', value: 'NovaSkill Hub', sub: 'Accredited Curriculum' },
    ],
    highlights: [
      'Production repository workflows with real git PR reviews',
      'Full-stack Next.js, Node.js, and Cloud deployment labs',
      'DSA & System design interview preparation',
      'Capstone portfolio projects deployed to live domains',
    ],
    ctaText: 'Explore Student Academy',
    href: '/training',
  },
];

export default function Pillars() {
  const [activeTab, setActiveTab] = useState('saas');

  const activePillar = pillarsData.find((p) => p.id === activeTab) || pillarsData[0];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/25 text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Three Verticals · One Unified Studio</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mb-4">
            Everything your product needs to <span className="clickup-gradient-text">launch, scale, &amp; educate.</span>
          </h2>

          <p className="text-krudex-muted text-base sm:text-lg max-w-2xl leading-relaxed">
            Switch views to explore how our three core pillars work together seamlessly.
          </p>
        </div>

        {/* ClickUp-Style Horizontal View Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0F0C1B] border border-white/10 shadow-xl overflow-x-auto max-w-full">
            {pillarsData.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = pillar.id === activeTab;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#7B68EE] via-[#C026D3] to-[#00D2FF] text-white shadow-lg shadow-[#7B68EE]/30'
                      : 'text-krudex-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="clickup-card p-6 sm:p-10 border border-white/10 relative overflow-hidden"
          >
            {/* Ambient Background Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7B68EE]/10 to-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Narrative & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#7B68EE]/15 text-[#A78BFA] border border-[#7B68EE]/30 mb-3 inline-block">
                    {activePillar.badge}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight mb-3">
                    {activePillar.headline}
                  </h3>
                  <p className="text-krudex-muted text-sm sm:text-base leading-relaxed">
                    {activePillar.desc}
                  </p>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-2.5 pt-2">
                  {activePillar.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={activePillar.href}
                    className="clickup-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold"
                  >
                    <span>{activePillar.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Metric Tiles */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {activePillar.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-5 rounded-2xl bg-[#09070F]/80 border border-white/10 hover:border-[#7B68EE]/40 transition-colors"
                  >
                    <span className="text-xs font-mono text-krudex-muted uppercase tracking-wider block mb-1">
                      {metric.label}
                    </span>
                    <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight clickup-gradient-text">
                      {metric.value}
                    </div>
                    <span className="text-xs text-white/60 mt-1 block font-medium">
                      {metric.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
