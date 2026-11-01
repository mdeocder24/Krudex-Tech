"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface CardData {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  desc: string;
  statNumber: string;
  statLabel: string;
  points: string[];
  ctaLink: string;
  ctaText: string;
  gradient: string;
  bgGlow: string;
}

const cards: CardData[] = [
  {
    id: 'card-1',
    category: 'PILLAR 01 · SAAS ENGINEERING',
    categoryColor: 'text-[#00D2FF] bg-[#00D2FF]/10 border-[#00D2FF]/30',
    title: 'High-Throughput Web Platforms & Edge Architecture',
    desc: 'We engineer mission-critical SaaS platforms using Next.js 16, TypeScript, and AWS global edge infrastructure. Every platform ships with zero technical debt, sub-1s load times, and complete IP handover.',
    statNumber: '99',
    statLabel: 'Lighthouse Score Target',
    points: [
      'Type-safe full-stack codebases with Next.js 16, Node.js, and Prisma',
      'Automated CI/CD deployment pipelines with zero-downtime rollouts',
      'Microsecond database optimization across PostgreSQL & Redis',
      'Production SLA with 24-hour response and 30-day post-launch warranty'
    ],
    ctaLink: '/services',
    ctaText: 'Explore Engineering Solutions',
    gradient: 'from-[#00D2FF]/20 via-[#7B68EE]/20 to-transparent',
    bgGlow: 'from-[#00D2FF]/15 to-[#7B68EE]/10'
  },
  {
    id: 'card-2',
    category: 'PILLAR 02 · DIGITAL MARKETING',
    categoryColor: 'text-[#E01E5A] bg-[#E01E5A]/10 border-[#E01E5A]/30',
    title: 'Google Ads & Acquisition Treated as Software Problems',
    desc: 'Zero vanity clicks, zero disconnected spreadsheets. We build high-converting landing pages linked directly to GA4 server-side telemetry and real-time conversion tracking so every rupee spent is accountable.',
    statNumber: '4.2x',
    statLabel: 'Average Search ROAS',
    points: [
      'Search & Performance Max campaign architecture built for high buyer intent',
      'A/B tested conversion landing pages optimized for maximum signups',
      'Server-side GA4 and Meta CAPI conversion attribution databases',
      'Weekly founder reporting with transparent unit economics and CPA metrics'
    ],
    ctaLink: '/services#digital-marketing',
    ctaText: 'Explore Growth Solutions',
    gradient: 'from-[#E01E5A]/20 via-[#F472B6]/20 to-transparent',
    bgGlow: 'from-[#E01E5A]/15 to-[#F472B6]/10'
  },
  {
    id: 'card-3',
    category: 'PILLAR 03 · NOVA SKILL HUB ACADEMY',
    categoryColor: 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30',
    title: 'Student Training Powered by Active Practitioners',
    desc: 'In collaboration with NovaSkill Hub, we train aspiring software engineers by having them ship code to production repositories. No toy tutorials, no outdated syllabi — real engineering mentorship from day one.',
    statNumber: '94%',
    statLabel: 'Placement SLA Target',
    points: [
      'Full-stack Next.js, Node.js, cloud backends, and system design labs',
      'Production pull request reviews conducted by practicing senior engineers',
      'Rigorous algorithmic prep and simulated technical interview rounds',
      'Accredited NovaSkill certification and direct pipelines to hiring partners'
    ],
    ctaLink: '/training',
    ctaText: 'Explore Student Academy',
    gradient: 'from-[#10B981]/20 via-[#00D2FF]/20 to-transparent',
    bgGlow: 'from-[#10B981]/15 to-[#00D2FF]/10'
  }
];

interface AppleCardProps {
  card: CardData;
  index: number;
  totalCards: number;
  globalProgress: MotionValue<number>;
}

function AppleCard({ card, index, totalCards, globalProgress }: AppleCardProps) {
  const isLast = index === totalCards - 1;

  // Apple-style scroll transforms: earlier cards scale down and dim as later cards stack on top
  const step = 1 / totalCards;
  const start = index * step;
  const end = (index + 1) * step;

  // Scaling: Card 1 scales to 0.92, Card 2 to 0.96, Card 3 remains 1.0
  const targetScale = isLast ? 1 : 1 - (totalCards - 1 - index) * 0.04;
  const scale = useTransform(globalProgress, [start, end], [1, targetScale]);
  
  // Brightness dimming: Card dims to 0.65 as next card pins
  const opacity = useTransform(globalProgress, [start, end], [1, isLast ? 1 : 0.7]);
  const brightness = useTransform(globalProgress, [start, end], ["brightness(1)", isLast ? "brightness(1)" : "brightness(0.7)"]);

  // Staggered sticky top offsets for visible layered headers
  const topOffset = `calc(6.5rem + ${index * 1.75}rem)`;

  return (
    <div className="relative min-h-[520px] sm:min-h-[580px] mb-16 last:mb-0">
      <motion.div
        style={{
          top: topOffset,
          scale,
          opacity,
          filter: brightness,
          zIndex: index + 1,
        }}
        className="sticky w-full will-change-transform"
      >
        <div className="clickup-card p-8 sm:p-12 rounded-3xl border border-white/15 relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] bg-[#0E0B19]/95 backdrop-blur-2xl transition-all duration-200 hover:border-white/25">
          {/* Dynamic Background Corner Glow */}
          <div className={`absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br ${card.bgGlow} rounded-full blur-3xl pointer-events-none`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
            {/* Left Column: Copy & Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                <span className={card.categoryColor}>{card.category}</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight leading-[1.15]">
                {card.title}
              </h3>

              <p className="text-krudex-muted text-sm sm:text-base leading-relaxed">
                {card.desc}
              </p>

              <div className="space-y-3 pt-2">
                {card.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-white/90 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={card.ctaLink}
                  className="clickup-btn-primary px-7 py-3 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-2 group"
                >
                  <span>{card.ctaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Metric Callout */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
              <div className="w-full max-w-sm rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 flex flex-col items-center text-center shadow-inner relative overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-tr ${card.gradient} opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500`} />
                
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                  VERIFIED OUTCOME
                </span>

                <span className="font-heading font-black text-6xl sm:text-7xl text-white tracking-tight mb-2">
                  {card.statNumber}
                </span>

                <span className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider mb-6">
                  {card.statLabel}
                </span>

                <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>Production Ready</span>
                  </span>
                  <span className="text-[#10B981] font-semibold">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function AppleStickyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative bg-[#06040A] overflow-visible border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/80 uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#7B68EE]" />
            <span>The Krudex Studio Model</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            Built for velocity. <span className="clickup-gradient-text">Engineered for scale.</span>
          </h2>

          <p className="text-krudex-muted text-base sm:text-lg max-w-2xl">
            Scroll through our three integrated disciplines designed to take you from initial architecture to profitable customer scale.
          </p>
        </div>

        {/* Apple-style Sticky Stacking Cards Container */}
        <div className="relative">
          {cards.map((card, idx) => (
            <AppleCard
              key={card.id}
              card={card}
              index={idx}
              totalCards={cards.length}
              globalProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
