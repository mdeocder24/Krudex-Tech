"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';
import { Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { 
    value: 50, 
    suffix: '+', 
    label: 'Projects Delivered', 
    desc: 'Production SaaS & Web Systems',
    icon: Sparkles,
    color: 'from-[#7B68EE] to-[#A78BFA]'
  },
  { 
    value: 99, 
    suffix: '', 
    label: 'Lighthouse Score', 
    desc: 'Sub-Second Web Performance',
    icon: Zap,
    color: 'from-[#00D2FF] to-[#38BDF8]'
  },
  { 
    value: 24, 
    suffix: 'h', 
    label: 'SLA Response Time', 
    desc: 'Guaranteed Direct Resolution',
    icon: Activity,
    color: 'from-[#E01E5A] to-[#F472B6]'
  },
  { 
    value: 100, 
    suffix: '%', 
    label: 'IP Transferred', 
    desc: 'Zero Vendor Lock-In Ever',
    icon: ShieldCheck,
    color: 'from-[#10B981] to-[#34D399]'
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(motionVal, value, { duration: 1.4, ease: 'easeOut' });
    return ctrl.stop;
  }, [inView, motionVal, value]);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsub;
  }, [rounded, suffix]);

  return (
    <span ref={ref} className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white clickup-gradient-text tracking-tight">
      0{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#09070F]/80 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-gradient-to-r from-[#7B68EE]/10 via-[#E01E5A]/10 to-[#00D2FF]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="clickup-card p-6 sm:p-7 text-center flex flex-col items-center justify-center group cursor-pointer hover:border-[#7B68EE]/50 hover:shadow-[0_20px_40px_-10px_rgba(123,104,238,0.25)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#7B68EE]/40 transition-all">
                  <Icon className="w-5 h-5 text-white/80 group-hover:text-[#A78BFA] transition-colors" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <h3 className="font-heading font-bold text-sm sm:text-base text-white mt-2 mb-1 group-hover:text-[#A78BFA] transition-colors">
                  {stat.label}
                </h3>
                <p className="text-xs text-krudex-muted font-medium">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
