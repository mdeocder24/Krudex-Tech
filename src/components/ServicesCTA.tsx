"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ServicesCTA() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="clickup-card p-8 sm:p-14 border border-[#7B68EE]/40 relative overflow-hidden text-center flex flex-col items-center shadow-[0_0_80px_rgba(123,104,238,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7B68EE]/15 via-[#E01E5A]/10 to-[#00D2FF]/15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Complimentary Technical Audit</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
              Have a project in mind? <span className="clickup-gradient-text">Let&apos;s scope it.</span>
            </h2>

            <p className="text-krudex-muted text-sm sm:text-base leading-relaxed mb-8">
              We offer a free 30-minute scoping call with a principal engineer. We&apos;ll review architecture feasibility, budget parameters, and sprint timelines.
            </p>

            <Link
              href="/contact"
              className="clickup-btn-primary px-9 py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 mb-6"
            >
              <span>Schedule Scoping Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Zero obligations</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Direct senior engineer conversation</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
