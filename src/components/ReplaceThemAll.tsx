"use client";

import React from 'react';
import Link from 'next/link';
import { XCircle, CheckCircle2, ArrowRight, Sparkles, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReplaceThemAll() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E01E5A]/10 border border-[#E01E5A]/30 text-xs font-semibold text-[#F472B6] uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consolidate Your Tech &amp; Growth Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight max-w-3xl mb-4"
          >
            Replace 4 disconnected vendors with{' '}
            <span className="clickup-gradient-text">one disciplined studio.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-krudex-muted text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Eliminate finger-pointing, handoff delays, and bloated retainers. Krudex unifies software engineering, performance marketing, and talent training under one roof.
          </motion.p>
        </div>

        {/* Side-by-Side Comparison Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* 1. The Fragmented Approach (The Old Way) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between group hover:border-red-500/20 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>THE FRAGMENTED APPROACH</span>
                </span>
                <span className="text-[11px] font-mono text-white/40">4 SEPARATE INVOICES</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white/90 mb-4">
                Disconnected agencies &amp; scattered freelancers
              </h3>

              <div className="space-y-4 text-sm text-krudex-muted">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Dev shop delivers code without understanding conversion funnels or tracking pixels.</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Ad agency burns budget on vanity clicks without access to backend attribution databases.</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Generic training bootcamps teach outdated toy projects that fail real engineering interviews.</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>Finger-pointing during downtime; zero clear accountability for business outcomes.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-white/40 font-mono">
              RESULT: Delayed launches, wasted ad spend, proprietary lock-in
            </div>
          </motion.div>

          {/* 2. The Krudex Unified Studio (ClickUp Style) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="clickup-card p-8 sm:p-10 border border-[#7B68EE]/30 relative overflow-hidden flex flex-col justify-between shadow-[0_0_50px_rgba(123,104,238,0.15)] group hover:border-[#7B68EE]/60 hover:shadow-[0_0_70px_rgba(123,104,238,0.25)] transition-all duration-300"
          >
            {/* Luminous Top Right Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#7B68EE]/20 to-[#E01E5A]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono font-bold text-[#A78BFA] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                  <span>THE KRUDEX UNIFIED STUDIO</span>
                </span>
                <span className="text-[11px] font-mono text-[#00D2FF] font-semibold bg-[#00D2FF]/10 px-2 py-0.5 rounded-full border border-[#00D2FF]/30">
                  ALL-IN-ONE
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white tracking-tight mb-4">
                Architecture, acquisition, &amp; talent in one place
              </h3>

              <div className="space-y-4 text-sm text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Full-stack engineering:</strong> Next.js 16, TypeScript, and cloud backends with 99 Lighthouse performance.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>Performance marketing:</strong> Google Ads engineered directly into high-converting funnels with GA4 tracking.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>NovaSkill Hub Academy:</strong> Active engineering mentors training students on real production repositories.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <span><strong>100% IP ownership:</strong> You own all source code, design systems, and cloud credentials from day one.</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-white/60">
                SLA: 24h Response · 30-Day Warranty
              </span>
              <Link
                href="/contact"
                className="clickup-btn-primary px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 group/btn"
              >
                <span>Work with Krudex</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
