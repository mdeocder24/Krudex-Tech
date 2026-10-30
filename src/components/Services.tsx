"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MotionLink = motion.create ? motion.create(Link) : motion(Link);

const services = [
  {
    num: "01",
    title: "SaaS & Web Platforms",
    image: "/images/saas-platform.webp",
    desc: "Enterprise web platforms, multi-tenant SaaS architecture, and customer portals built for high availability and low latency.",
    tags: ["Next.js 16", "PostgreSQL", "FastAPI / Node", "Docker"]
  },
  {
    num: "02",
    title: "Mobile Applications",
    image: "/images/mobile-app.webp",
    desc: "Fluid iOS & Android applications engineered with native capabilities, offline sync, and production release pipelines.",
    tags: ["React Native", "Expo EAS", "Native Bridges", "Offline Sync"]
  },
  {
    num: "03",
    title: "AI & ML Integrations",
    image: "/images/ai-architecture.webp",
    desc: "Production LLM applications, enterprise RAG vector stores, and automated inference agents built for privacy and speed.",
    tags: ["LangChain", "PyTorch", "RAG Pipelines", "Claude / OpenAI"]
  },
  {
    num: "04",
    title: "UI/UX & Design Systems",
    image: "/images/dark-texture.webp",
    desc: "High-fidelity design tokens, interactive prototypes, and modular component architectures that scale with your team.",
    tags: ["Figma Systems", "Interactive Prototyping", "Design Tokens", "MVP Scoping"]
  },
  {
    num: "05",
    title: "Google Ads & Performance Growth",
    image: "/images/growth-marketing.webp",
    desc: "Search intent acquisition, performance advertising, and technical conversion rate optimization measured directly by revenue.",
    tags: ["Google Ads", "Meta Ads", "GA4 Conversion Tracking", "SEO Strategy"]
  }
];

const Services = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services-overview" className="px-6 md:px-14 lg:px-20 py-24 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_6px_#E52B3B]" />
          <span className="text-xs text-white/60 font-mono tracking-wider uppercase">
            Service Capabilities
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-6 leading-[1.08] tracking-tight">
                Architected for scale. <br />
                <span className="text-white/60">
                  Engineered for impact.
                </span>
              </h2>
              <p className="text-krudex-muted text-base leading-relaxed mb-8 font-normal">
                We handle the end-to-end technical execution—from distributed cloud infrastructure and bespoke frontend interfaces to intelligent automation and performance customer acquisition.
              </p>
            </div>

            <div className="hidden lg:block pt-8 border-t border-white/[0.06]">
              <MotionLink
                href="/services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.1] hover:border-krudex-accent/50 text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:shadow-[0_0_25px_rgba(229,43,59,0.15)]"
              >
                <span>View Full Service Catalog</span>
                <ArrowRight className="w-4 h-4 text-krudex-accent group-hover:translate-x-1 transition-transform" />
              </MotionLink>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((svc, index) => {
              const isFullWidth = index === services.length - 1 && services.length % 2 === 1;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={() => setHoveredIdx(index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative rounded-2xl bg-[#0D0A0C]/80 backdrop-blur-md border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.18] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.5)] overflow-hidden ${
                    isFullWidth ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-krudex-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {isFullWidth ? (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-7">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-krudex-accent font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-krudex-accent/10 border border-krudex-accent/20">
                            {svc.num} // PERFORMANCE GROWTH
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-krudex-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                        <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-white transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-krudex-muted text-sm leading-relaxed mb-5">
                          {svc.desc}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {svc.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono text-white/60 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-5 relative h-36 w-full rounded-xl overflow-hidden border border-white/[0.08] bg-[#070507]">
                        <Image
                          src={svc.image}
                          alt={svc.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-transparent to-transparent opacity-70" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        {/* Image Preview Header */}
                        <div className="relative h-28 w-full rounded-xl overflow-hidden mb-5 border border-white/[0.08] bg-[#070507]">
                          <Image
                            src={svc.image}
                            alt={svc.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0C] via-[#0D0A0C]/30 to-transparent" />
                          <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                            <span className="text-krudex-accent font-mono text-[11px] font-semibold px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/[0.08]">
                              {svc.num}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-black/75 backdrop-blur-md border border-white/[0.08] flex items-center justify-center">
                              <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-krudex-accent transition-colors" />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                          {svc.title}
                        </h3>
                        <p className="text-krudex-muted text-sm leading-relaxed mb-5">
                          {svc.desc}
                        </p>
                      </div>

                      {/* Micro tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                        {svc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono text-white/60 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden flex justify-center">
          <MotionLink
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.03] hover:border-krudex-accent text-white px-7 py-3.5 rounded-full text-sm font-medium transition-colors"
          >
            <span>View Full Service Catalog</span>
            <ArrowRight className="w-4 h-4 text-krudex-accent" />
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

export default Services;
