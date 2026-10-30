"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, sublabel, delay }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1600;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        start = Math.floor(eased * value);
        setCount(start);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl bg-[#0D0A0C]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-8 text-center transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.5)]"
    >
      {/* Top subtle micro dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent/60 group-hover:bg-krudex-accent group-hover:shadow-[0_0_6px_#E52B3B] transition-all mx-auto mb-3" />

      <div className="text-white font-serif text-4xl sm:text-5xl md:text-6xl tabular-nums font-normal mb-2 tracking-tight">
        <span>{count}</span>
        <span className="text-krudex-accent font-semibold">{suffix}</span>
      </div>
      <div className="text-white/85 text-xs sm:text-sm font-medium tracking-wide mb-1">{label}</div>
      {sublabel && (
        <div className="text-white/40 text-[11px] font-mono uppercase tracking-wider">{sublabel}</div>
      )}
    </motion.div>
  );
};

const stats = [
  { value: 50, suffix: "+", label: "Production Platforms Built", sublabel: "SaaS & Mobile Systems", delay: 0.1 },
  { value: 120, suffix: "+", label: "Campaigns Optimized", sublabel: "Performance Google Ads", delay: 0.2 },
  { value: 300, suffix: "+", label: "Engineers Mentored", sublabel: "NovaSkill Hub Collaboration", delay: 0.3 },
  { value: 99, suffix: ".9%", label: "System Availability SLA", sublabel: "Cloud Architecture", delay: 0.4 },
];

const Stats = () => {
  return (
    <section className="px-6 md:px-14 lg:px-20 py-16 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
