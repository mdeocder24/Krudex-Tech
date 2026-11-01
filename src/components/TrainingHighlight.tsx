"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, Users, Award, Code } from 'lucide-react';

export default function TrainingHighlight() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="clickup-card p-8 sm:p-12 border border-[#7B68EE]/30 relative overflow-hidden bg-gradient-to-br from-[#0F0C1B] via-[#151124] to-[#09070F]">
          {/* Luminous Glow in Top Right */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E01E5A]/15 via-[#7B68EE]/15 to-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E01E5A]/10 border border-[#E01E5A]/30 text-xs font-semibold text-[#F472B6] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NovaSkill Hub Collaboration</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1]">
                Practitioner-led training for the{' '}
                <span className="clickup-gradient-text">next wave of engineers.</span>
              </h2>

              <p className="text-krudex-muted text-sm sm:text-base leading-relaxed">
                In partnership with <strong>NovaSkill Hub</strong>, we deliver hands-on training tracks led exclusively by engineers who ship production code daily. Students work inside actual production repository architectures, write test suites, and resolve live PR reviews.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <Code className="w-5 h-5 text-[#00D2FF]" />
                  <span className="text-xs font-semibold text-white">Full-Stack Web Dev · 12 Wks</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#F472B6]" />
                  <span className="text-xs font-semibold text-white">Cloud &amp; DevOps Labs · 8 Wks</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-[#A78BFA]" />
                  <span className="text-xs font-semibold text-white">DSA &amp; System Design · 10 Wks</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <Users className="w-5 h-5 text-[#10B981]" />
                  <span className="text-xs font-semibold text-white">Capstone Mentoring · 6 Wks</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/training"
                  className="clickup-btn-primary px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
                >
                  <span>Explore Training Tracks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact?interest=training"
                  className="clickup-btn-secondary px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold"
                >
                  <span>Inquire for Next Batch</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Mini Interactive Mentorship Badge */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl bg-[#09070F]/90 border border-white/10 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-bold text-white/70">ACADEMY STATUS</span>
                  <span className="text-[10px] font-mono status-pill-green px-2 py-0.5 rounded-full font-bold">
                    ADMISSIONS OPEN
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-krudex-muted">Cohort Size</span>
                    <span className="text-white font-semibold">15 Students / Mentor</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-krudex-muted">Format</span>
                    <span className="text-white font-semibold">Live Interactive Labs</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-krudex-muted">Placement Support</span>
                    <span className="text-[#00D2FF] font-semibold">Direct Partner Hiring</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#7B68EE]/10 border border-[#7B68EE]/20 text-[11px] text-[#A78BFA] leading-relaxed">
                  &ldquo;Krudex students graduate with actual code deployed to production, not toy clones.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
