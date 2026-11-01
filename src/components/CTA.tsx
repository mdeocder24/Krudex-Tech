"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="clickup-card p-8 sm:p-14 border border-[#7B68EE]/40 relative overflow-hidden text-center flex flex-col items-center shadow-[0_0_80px_rgba(123,104,238,0.2)]">
          {/* Luminous Multi-Color Gradient Mesh Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7B68EE]/15 via-[#E01E5A]/10 to-[#00D2FF]/15 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-[#7B68EE]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white uppercase tracking-wider mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              <span>Start Your Project Today</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.08] mb-6">
              Ready to build something <span className="clickup-gradient-text">extraordinary?</span>
            </h2>

            <p className="text-krudex-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Whether you need a high-scale production SaaS product, a high-ROAS marketing engine, or practitioner-led talent training — let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <Link
                href="/contact"
                className="clickup-btn-primary w-full sm:w-auto px-9 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="clickup-btn-secondary w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>View All Services</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Free 30-min scoping consultation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>No commitment required</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>100% IP transfer guaranteed</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
