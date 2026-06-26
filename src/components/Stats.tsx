"use client";

import React, { useEffect, useRef, useState } from "react";

const stats = [
  { numeric: 50, suffix: "+", label: "Projects Delivered", className: "text-text-primary" },
  { numeric: 99, suffix: "", label: "Lighthouse Score", className: "text-mint" },
  { numeric: 3, suffix: "×", label: "Avg Performance Gain", className: "text-text-primary" },
  { numeric: 4, suffix: " yrs", label: "In Practice", className: "text-text-primary" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    startRef.current = null;

    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, active }: { stat: (typeof stats)[0]; active: boolean }) {
  const count = useCountUp(stat.numeric, 1200, active);
  return (
    <div className="flex flex-col items-center gap-2 text-center px-6">
      <span className={`font-sans font-semibold text-4xl md:text-5xl leading-none ${stat.className}`}>
        {count}{stat.suffix}
      </span>
      <span className="text-text-secondary text-sm font-medium">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-t border-b border-border py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`${i < stats.length - 1 ? "border-r border-border" : ""} py-4`}
          >
            <StatItem stat={stat} active={active} />
          </div>
        ))}
      </div>
    </div>
  );
}
