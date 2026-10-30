"use client";

import React from 'react';

const tools = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js 16', category: 'Fullstack' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Python', category: 'Backend' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'OpenAI API', category: 'AI' },
  { name: 'LangChain', category: 'AI Agents' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Tailwind CSS v4', category: 'Design' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS & Cloudflare', category: 'Cloud' },
  { name: 'Google Ads & GA4', category: 'Marketing' },
  { name: 'Figma', category: 'UI/UX' },
];

const ScrollTools = () => {
  return (
    <section aria-label="Technologies we work with" className="w-full py-6 md:py-8 border-t border-b border-white/[0.06] bg-black/40 backdrop-blur-md relative z-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          animation: marquee 45s linear infinite;
        }
      `}</style>

      {/* Left/Right subtle fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#080608] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#080608] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee-smooth items-center gap-4 md:gap-6 pr-6 hover:[animation-play-state:paused]">
        {[...tools, ...tools, ...tools].map((tool, i) => (
          <div
            key={i}
            className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.18] transition-all duration-200 cursor-default select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-krudex-accent/60 group-hover:bg-krudex-accent transition-colors" />
            <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide group-hover:text-white transition-colors">
              {tool.name}
            </span>
            <span className="text-[10px] font-mono uppercase text-white/35 tracking-wider">
              {tool.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollTools;
