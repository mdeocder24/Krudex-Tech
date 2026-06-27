"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1800;
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
      className="text-center"
    >
      <div className="text-white font-serif text-5xl md:text-6xl font-normal mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-krudex-muted text-xs uppercase tracking-[0.2em]">{label}</div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="px-8 md:px-14 lg:px-20 py-24 bg-krudex-black border-t border-b border-krudex-border/20 relative z-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <StatItem value={50} suffix="+" label="Clients Served" delay={0} />
        <StatItem value={120} suffix="+" label="Projects Delivered" delay={0.1} />
        <StatItem value={99} suffix="%" label="Client Retention" delay={0.2} />
        <StatItem value={15} suffix="+" label="Team Members" delay={0.3} />
      </div>
    </section>
  );
};

export default Stats;
