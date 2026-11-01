"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface SolutionTab {
  id: string;
  label: string;
  headline: string;
  desc: string;
  replaces: string[];
  checklist: string[];
  ctaLink: string;
  ctaText: string;
  agents: {
    name: string;
    action: string;
    avatarColor: string;
  }[];
}

const solutions: SolutionTab[] = [
  {
    id: 'product-eng',
    label: 'Product & Eng',
    headline: 'Ship faster, more reliable software',
    desc: 'Streamline the entire strategy + dev process in a single, connected studio workspace.',
    replaces: ['Jira', 'Slack', 'Linear', 'GitHub Projects'],
    checklist: [
      'Plan + execute technical roadmap with senior engineers',
      'Identify + resolve critical bugs within 24h SLA',
      'Integrate with AI coders, CI/CD, and 99 Lighthouse gates',
    ],
    ctaLink: '/services',
    ctaText: 'Explore Engineering Solutions',
    agents: [
      { name: 'PRD Agent', action: 'Creates specs from scoping calls', avatarColor: 'from-[#7B68EE] to-[#E01E5A]' },
      { name: 'Triage Agent', action: 'Prioritizes bugs and edge latency regressions', avatarColor: 'from-[#00D2FF] to-[#3B82F6]' },
      { name: 'Live Answers Agent', action: 'Keeps stakeholders informed with daily changelogs', avatarColor: 'from-[#F59E0B] to-[#EF4444]' },
      { name: 'Codegen Agent', action: 'Produces audited TypeScript and Next.js code', avatarColor: 'from-[#10B981] to-[#34D399]' },
    ],
  },
  {
    id: 'marketing',
    label: 'Performance Marketing',
    headline: 'Scale acquisition with engineering precision',
    desc: 'Run Google Ads, Performance Max, and conversion rate optimization with verified GA4 attribution.',
    replaces: ['Ad Agencies', 'Vanity Dashboards', 'Disconnected Freelancers'],
    checklist: [
      'Search and Performance Max campaign architecture',
      'Conversion-optimized landing pages with A/B testing',
      'Zero vanity clicks: every rupee tracked to revenue',
    ],
    ctaLink: '/services#digital-marketing',
    ctaText: 'Explore Growth Solutions',
    agents: [
      { name: 'ROAS Agent', action: 'Monitors real-time ad spend efficiency & bids', avatarColor: 'from-[#E01E5A] to-[#F472B6]' },
      { name: 'Funnel Agent', action: 'A/B tests landing page variants for maximum conversion', avatarColor: 'from-[#7B68EE] to-[#00D2FF]' },
      { name: 'Attribution Agent', action: 'Syncs GA4 conversion events to backend database', avatarColor: 'from-[#10B981] to-[#3B82F6]' },
      { name: 'SEO Agent', action: 'Generates programmatic SEO pages with schema markup', avatarColor: 'from-[#F59E0B] to-[#E01E5A]' },
    ],
  },
  {
    id: 'academy',
    label: 'Student Training',
    headline: 'Practitioner mentorship alongside NovaSkill Hub',
    desc: 'Ambitious students learn by shipping code to production repositories, not by following toy tutorials.',
    replaces: ['Generic Bootcamps', 'Outdated University Syllabi', 'Toy Projects'],
    checklist: [
      'Full-stack Next.js, Node.js, and cloud deployment labs',
      'Production pull request reviews by practicing engineers',
      'Direct interview prep and accredited NovaSkill certification',
    ],
    ctaLink: '/training',
    ctaText: 'Explore Student Academy',
    agents: [
      { name: 'Curriculum Agent', action: 'Adapts labs to latest industry frameworks', avatarColor: 'from-[#00D2FF] to-[#10B981]' },
      { name: 'Code Review Agent', action: 'Provides automated style & performance feedback on PRs', avatarColor: 'from-[#7B68EE] to-[#F472B6]' },
      { name: 'DSA Mentor Agent', action: 'Simulates technical system design interviews', avatarColor: 'from-[#F59E0B] to-[#00D2FF]' },
      { name: 'Placement Agent', action: 'Connects top graduates with hiring tech partners', avatarColor: 'from-[#10B981] to-[#7B68EE]' },
    ],
  },
];

export default function ClickUpSolutionsTabs() {
  const [activeTab, setActiveTab] = useState('product-eng');
  const current = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden bg-[#0A0713]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header matching Video Frame 35 */}
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4"
          >
            Specialist solutions for <span className="clickup-gradient-text">every team.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-krudex-muted text-base sm:text-lg max-w-xl mb-8"
          >
            Your key workflows, powered by Krudex Specialists &amp; Autonomous Agents.
          </motion.p>

          {/* Interactive Filter Pills matching Video Frame 35 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {solutions.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-2 border-[#00D2FF] text-white bg-[#00D2FF]/10 shadow-[0_0_20px_rgba(0,210,255,0.3)]'
                    : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-white/[0.02]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Big Rounded Showcase Card matching Video Frame 35 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="clickup-card p-8 sm:p-12 lg:p-14 border border-white/15 bg-gradient-to-br from-[#120F24] via-[#0F0C1B] to-[#0A0713] relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#7B68EE]/20 via-[#E01E5A]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              {/* Left Column: Narrative & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                  {current.headline}
                </h3>

                <p className="text-krudex-muted text-sm sm:text-base leading-relaxed">
                  {current.desc}
                </p>

                {/* Replaces Badges */}
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                    REPLACES:
                  </span>
                  {current.replaces.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Checklist */}
                <div className="space-y-3 pt-2">
                  {current.checklist.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/40">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-white/90 leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={current.ctaLink}
                    className="clickup-btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 group/btn"
                  >
                    <span>{current.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 4 Interactive Agent Cards matching Video Frame 35 */}
              <div className="lg:col-span-5 space-y-3">
                {current.agents.map((agent, idx) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#7B68EE]/60 hover:bg-white/[0.08] hover:translate-x-1 transition-all duration-200 flex items-center gap-3.5 cursor-pointer group shadow-sm"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${agent.avatarColor} flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      ✦
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                        {agent.name}
                      </h4>
                      <p className="text-[11px] text-krudex-muted leading-tight mt-0.5">
                        {agent.action}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
