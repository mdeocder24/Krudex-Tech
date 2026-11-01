"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Cpu, Palette, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    icon: Code2,
    badge: 'CORE PLATFORMS',
    badgeColor: 'status-pill-blue',
    title: 'SaaS & Web Platforms',
    desc: 'From technical specification to cloud production. Next.js 16, PostgreSQL, Redis caching, and CI/CD pipelines engineered to run at scale.',
    metric: 'Sub-1s LCP Guaranteed',
    href: '/services',
  },
  {
    icon: Smartphone,
    badge: 'MOBILE DEV',
    badgeColor: 'status-pill-purple',
    title: 'Mobile Applications',
    desc: 'Cross-platform iOS and Android applications with React Native and Expo. Native device APIs, 60fps performance, and offline-first data sync.',
    metric: 'Native 60fps Fluidity',
    href: '/services',
  },
  {
    icon: Cpu,
    badge: 'INTELLIGENCE',
    badgeColor: 'status-pill-pink',
    title: 'AI & ML Integrations',
    desc: 'Pragmatic machine learning embedded into production. Custom LLM agents, LangChain RAG pipelines, computer vision, and real-time inference.',
    metric: '18ms Inference Latency',
    href: '/services',
  },
  {
    icon: Palette,
    badge: 'DESIGN SYSTEMS',
    badgeColor: 'status-pill-orange',
    title: 'UI/UX & Brand Design',
    desc: 'Component primitives, design systems in Figma and Tailwind CSS v4, accessible WCAG flows, and investor-ready presentation decks.',
    metric: '40+ Brand Systems Shipped',
    href: '/services',
  },
  {
    icon: TrendingUp,
    badge: 'ACQUISITION',
    badgeColor: 'status-pill-green',
    title: 'Google Ads & Digital Marketing',
    desc: 'Performance marketing treated as a software problem. Search, Performance Max, funnel CRO, and transparent GA4 conversion attribution.',
    metric: '4.2x Average ROAS',
    href: '/services#digital-marketing',
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/25 text-xs font-semibold text-[#00D2FF] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modular Engineering Disciplines</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
              Built for production. <span className="clickup-gradient-text">Engineered to win.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/services"
              className="clickup-btn-secondary px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 self-start md:self-auto shrink-0 group"
            >
              <span>View Full Service Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="clickup-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#7B68EE]/50 hover:shadow-[0_20px_40px_-10px_rgba(123,104,238,0.2)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-[#7B68EE]/40 transition-all">
                      <Icon className="w-5 h-5 text-[#A78BFA] group-hover:text-white transition-colors" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-2.5 group-hover:text-[#A78BFA] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#00D2FF] font-semibold">
                    {service.metric}
                  </span>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-white flex items-center gap-1 font-medium transition-colors group/link"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Custom Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="clickup-card p-6 sm:p-7 bg-gradient-to-br from-[#7B68EE]/10 via-[#0F0C1B] to-[#E01E5A]/10 border border-[#7B68EE]/30 flex flex-col justify-between group hover:border-[#7B68EE]/60 hover:shadow-[0_20px_40px_-10px_rgba(123,104,238,0.25)] transition-all duration-300"
          >
            <div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full status-pill-pink mb-5 inline-block">
                BESPOKE SPRINT
              </span>
              <h3 className="font-heading font-black text-xl text-white mb-2.5">
                Have a unique system architecture?
              </h3>
              <p className="text-krudex-muted text-xs sm:text-sm leading-relaxed mb-6">
                We embed senior Krudex engineers directly into your sprints for focused delivery milestones, technical audits, and infrastructure scaling.
              </p>
            </div>

            <Link
              href="/contact"
              className="clickup-btn-primary px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 text-center group/btn"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
