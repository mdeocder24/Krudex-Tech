"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, TrendingUp, GraduationCap } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    label: "Engineering",
    domain: "platform.krudex.io",
    audience: "For Founders & Enterprise",
    title: "SaaS & Web Platforms",
    image: "/images/saas-platform.webp",
    desc: "We architect and engineer production SaaS applications, client portals, and cloud backends designed for sub-second response times and high availability.",
    features: ["Next.js 16 & Microservices", "High-throughput APIs & PostgreSQL", "Production AI/LLM Integration"],
    cta: "Explore Engineering Services",
    href: "/services",
  },
  {
    icon: TrendingUp,
    label: "Growth",
    domain: "growth.krudex.io",
    audience: "For Scaling Companies",
    title: "Google Ads & Marketing",
    image: "/images/growth-marketing.webp",
    desc: "Google Ads, search intent capture, and conversion funnels unified into one transparent performance engine measured strictly by ROI and pipeline revenue.",
    features: ["Full-funnel Google Search & Display", "Technical SEO & Schema Architecture", "Server-side GA4 & Event Analytics"],
    cta: "Explore Marketing Services",
    href: "/services#digital-marketing",
  },
  {
    icon: GraduationCap,
    label: "Academy",
    domain: "academy.krudex.io",
    audience: "For Ambitious Engineers",
    title: "Student Training Hub",
    image: "/images/student-training.webp",
    desc: "Intensive software engineering and digital marketing training from active industry practitioners, delivered in strategic collaboration with NovaSkill Hub.",
    features: ["Mentorship by practicing engineers", "Live commercial repository projects", "NovaSkill Hub industry accreditation"],
    cta: "Explore Student Training",
    href: "/training",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full rounded-2xl bg-[#0D0A0C]/80 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 flex flex-col transition-all duration-300 overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_12px_35px_-10px_rgba(0,0,0,0.6)]"
      >
        {/* Subtle, soft cursor ambient glow */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229, 43, 59, 0.08), transparent 60%)`,
          }}
        />

        {/* Top subtle hairline glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-krudex-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Engineered Product Window Chrome + Visual Preview */}
        <div className="relative rounded-xl overflow-hidden mb-6 border border-white/[0.08] bg-[#070507]">
          {/* Window Chrome Header Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span className="w-2 h-2 rounded-full bg-white/20" />
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 border border-white/[0.06] text-[10px] font-mono text-white/50">
              <span className="w-1 h-1 rounded-full bg-krudex-accent" />
              <span>{pillar.domain}</span>
            </div>
            <div className="w-6" />
          </div>

          {/* Visual Preview Image */}
          <div className="relative h-44 sm:h-48 w-full">
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* Card Header & Identity */}
        <div className="relative z-10 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/50">
              {pillar.audience}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-krudex-accent bg-krudex-accent/10 border border-krudex-accent/20 px-2.5 py-0.5 rounded-full font-medium">
              <Icon className="w-3 h-3" />
              <span>{pillar.label}</span>
            </span>
          </div>

          <h3 className="text-white font-semibold text-xl sm:text-2xl tracking-tight group-hover:text-white transition-colors">
            {pillar.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-krudex-muted text-sm leading-relaxed mb-6 relative z-10 font-normal">
          {pillar.desc}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2 mb-8 relative z-10">
          {pillar.features.map((feat, i) => (
            <li key={i} className="flex items-center gap-2.5 text-xs text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shrink-0 shadow-[0_0_6px_#E52B3B]" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Action Link */}
        <Link
          href={pillar.href}
          className="mt-auto inline-flex items-center justify-between w-full pt-4 border-t border-white/[0.06] text-sm font-medium text-white/90 group-hover:text-white transition-colors relative z-10"
        >
          <span className="group-hover:text-krudex-accent transition-colors font-medium">
            {pillar.cta}
          </span>
          <span className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-krudex-accent group-hover:bg-krudex-accent group-hover:text-white transition-all duration-200">
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

const Pillars = () => {
  return (
    <section id="what-krudex-does" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-mono">
              Core Verticals
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.08] tracking-tight"
          >
            One engineering firm. <br />
            <span className="text-white/60">
              Three unified practices.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.label} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
