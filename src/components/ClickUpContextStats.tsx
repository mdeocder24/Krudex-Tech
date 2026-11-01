"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ClickUpContextStats() {
  const stats = [
    {
      title: "Context Switching",
      stat: "32%",
      label: "Performance drop",
      desc: "Digital fatigue across scattered vendor tools reduces team velocity by up to 32%."
    },
    {
      title: "Context Missing",
      stat: "96%",
      label: "AI adoption failure",
      desc: "96% of companies fail in AI adoption because models lack real production codebase context."
    },
    {
      title: "Context Stitching",
      stat: "2.5h",
      label: "Wasted daily per engineer",
      desc: "Engineers waste 2.5 hours every single day searching across Slack, Jira, and fragmented repositories."
    }
  ];

  const toolsList = [
    'Tasks & Sprints', 'Architecture Wikis', 'AI Agents', 'Google Ads Funnels', 
    'GA4 Telemetry', 'PostgreSQL Models', 'FastAPI Endpoints', 'Next.js 16 Edge', 
    'CI/CD Gates', 'NovaSkill Academy', 'Figma Tokens', 'Lighthouse 99'
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#08060F] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-gradient-to-r from-[#7B68EE]/10 via-[#E01E5A]/10 to-[#00D2FF]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 3 Metric Columns matching Frame 06 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-16 border-b border-white/10">
          {stats.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col group hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2 group-hover:text-[#A78BFA] transition-colors">
                {item.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading font-black text-4xl sm:text-5xl clickup-gradient-text">
                  {item.stat}
                </span>
                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-krudex-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Center Headline: All apps, AI Agents, and humans in Krudex */}
        <div className="pt-16 sm:pt-20 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight max-w-4xl mb-4 leading-[1.08]"
          >
            All apps, AI Agents, <br />
            <span className="clickup-gradient-text">and humans in Krudex.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-krudex-muted text-base sm:text-lg max-w-2xl mb-12"
          >
            One disciplined studio to replace fragmented software and disconnected retainers.
          </motion.p>

          {/* Micro Matrix Grid of 12 Connected Tools matching Video Frame 06 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full"
          >
            {toolsList.map((tool) => (
              <div
                key={tool}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#7B68EE]/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center text-center cursor-default group"
              >
                <span className="text-xs font-semibold text-white/80 group-hover:text-white group-hover:scale-105 transition-all">
                  {tool}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
