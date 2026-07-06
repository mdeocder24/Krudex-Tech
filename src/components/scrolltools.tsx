"use client";

import React from 'react';

const tools = [
  { name: 'React', style: 'font-semibold tracking-wide' },
  { name: 'Next.js', style: 'font-bold' },
  { name: 'TypeScript', style: 'italic' },
  { name: 'Node.js', style: 'font-medium' },
  { name: 'Python', style: 'tracking-wider' },
  { name: 'TensorFlow', style: 'font-serif italic' },
  { name: 'PyTorch', style: 'font-bold' },
  { name: 'OpenAI', style: 'font-mono uppercase' },
  { name: 'LangChain', style: 'font-semibold' },
  { name: 'Hugging Face', style: 'italic' },
  { name: 'React Native', style: 'italic' },
  { name: 'Flutter', style: 'font-medium tracking-wide' },
  { name: 'Swift', style: 'font-semibold' },
  { name: 'Kotlin', style: 'tracking-widest' },
  { name: 'Figma', style: 'font-medium' },
  { name: 'Tailwind CSS', style: 'italic' },
  { name: 'Prisma', style: 'font-bold tracking-widest' },
  { name: 'GraphQL', style: 'font-semibold' },
  { name: 'Supabase', style: 'font-semibold' },
  { name: 'Next.js', style: 'italic text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 animate-shine' },
  { name: 'PostgreSQL', style: 'font-serif' },
  { name: 'MongoDB', style: 'italic' },
  { name: 'Redis', style: 'font-bold' },
  { name: 'AWS', style: 'font-bold uppercase' },
  { name: 'Vercel', style: 'tracking-wider' },
  { name: 'Docker', style: 'italic' },
  { name: 'Kubernetes', style: 'font-semibold' },
  { name: 'Stripe', style: 'font-bold' },
];

const ScrollTools = () => {
  return (
    <section className="w-full py-8 md:py-12 border-t border-krudex-border/30 bg-krudex-black relative z-10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
      `}</style>
      
      <div className="flex w-max animate-marquee items-center gap-8 md:gap-16 pr-8 md:pr-16 hover:[animation-play-state:paused]">
        {[...tools, ...tools].map((tool, i) => (
          <span
            key={i}
            className={`text-krudex-muted/50 text-base md:text-xl select-none whitespace-nowrap transition-colors hover:text-white ${tool.style}`}
          >
            {tool.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ScrollTools;
