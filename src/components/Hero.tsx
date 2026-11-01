"use client";

import React from 'react';
import Link from 'next/link';
import ClickUpMockup from './ClickUpMockup';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top ClickUp-Style Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 hover:border-[#7B68EE]/40 transition-colors mb-6 sm:mb-8 backdrop-blur-md cursor-pointer group"
        >
          <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] flex items-center justify-center text-white text-[10px]">
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '6s' }} />
          </span>
          <span className="text-xs font-semibold text-white/90">
            Krudex Studio 4.0
          </span>
          <span className="text-white/40">·</span>
          <span className="text-xs text-[#A78BFA] font-medium flex items-center gap-1 group-hover:text-white transition-colors">
            The Everything Studio for Work <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </motion.div>

        {/* High-Impact ClickUp-Style Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white leading-[1.05] tracking-tight max-w-5xl mb-6"
        >
          One studio to{' '}
          <span className="clickup-gradient-text">replace them all.</span>
        </motion.h1>

        {/* Value Proposition Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-krudex-muted max-w-3xl leading-relaxed mb-8 sm:mb-10"
        >
          All your software engineering, digital marketing, and student training in one disciplined place. We build high-throughput SaaS platforms, scale customer acquisition with Google Ads, and train engineering talent with active industry practitioners.
        </motion.p>

        {/* Conversion Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
        >
          <Link
            href="/contact"
            className="clickup-btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="clickup-btn-secondary w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Explore All Workflows</span>
          </Link>
        </motion.div>

        {/* Social Proof Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60 mb-14"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            <span>100% IP Transfer &amp; Code Ownership</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#00D2FF]" />
            <span>Sub-1s Performance &amp; 99 Lighthouse</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#7B68EE]" />
            <span>24h Response SLA Guarantee</span>
          </span>
        </motion.div>

        {/* The Full Hero Product Preview Mockup (ClickUp Interface) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="w-full"
        >
          <ClickUpMockup />
        </motion.div>

        {/* Social Proof Client Logos Bar (Exact tribute to ClickUp) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/5 w-full">
          <p className="text-[11px] font-mono tracking-widest uppercase text-white/40 mb-6">
            TRUSTED BY HIGH-GROWTH PLATFORMS, FAST TEAMS &amp; STARTUPS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="font-heading font-black text-xl text-white tracking-wider">AMAZON</span>
            <span className="font-heading font-black text-xl text-white tracking-wider">NVIDIA</span>
            <span className="font-heading font-black text-xl text-white tracking-wider">WAYFAIR</span>
            <span className="font-heading font-black text-xl text-white tracking-wider">TEDx</span>
            <span className="font-heading font-black text-xl text-white tracking-wider">NOVASKILL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
