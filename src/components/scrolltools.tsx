"use client";

import React from 'react';

const technologies = [
  { name: 'Next.js 16', cat: 'Frontend' },
  { name: 'React 19', cat: 'UI Library' },
  { name: 'TypeScript', cat: 'Type Safety' },
  { name: 'Google Ads', cat: 'Acquisition' },
  { name: 'FastAPI / Python', cat: 'Backend' },
  { name: 'PostgreSQL', cat: 'Database' },
  { name: 'Docker / K8s', cat: 'DevOps' },
  { name: 'TensorFlow / PyTorch', cat: 'AI/ML' },
  { name: 'NovaSkill Hub', cat: 'Academy' },
  { name: 'Cloudflare D1', cat: 'Edge DB' },
  { name: 'Tailwind CSS v4', cat: 'Styling' },
  { name: 'AWS Cloud', cat: 'Infrastructure' },
];

export default function ScrollTools() {
  return (
    <section className="py-8 border-y border-white/5 bg-[#09070F]/50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
        <div className="shrink-0 text-xs font-mono uppercase tracking-wider text-[#A78BFA] px-3 py-1 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/20 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
          <span>PRODUCTION STACK</span>
        </div>

        <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-2 py-1">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#7B68EE]/40 hover:bg-white/[0.06] transition-all shrink-0 cursor-default"
            >
              <span className="text-xs font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] text-white/40 font-mono">[{tech.cat}]</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
