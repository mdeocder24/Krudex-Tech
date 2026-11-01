"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}

function Word({ children, progress, range, isHighlight }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);
  const scale = useTransform(progress, range, [0.97, 1]);

  return (
    <span className="inline-block relative mr-2 sm:mr-3.5 my-1 sm:my-1.5">
      <motion.span
        style={{ opacity, y, scale }}
        className={`inline-block transition-colors duration-150 ${
          isHighlight
            ? 'clickup-gradient-text font-black'
            : 'text-white font-extrabold'
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function AppleScrollScrubText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this tall container for Apple-style pinned scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const phrase = "We design systems before writing code. Every engagement delivers production-grade TypeScript, measurable ROAS attribution, and zero vanity retainers.";
  const words = phrase.split(" ");

  const highlights = ["systems", "production-grade", "ROAS", "attribution,", "zero", "retainers."];

  // Scrub bar width from scroll progress
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] sm:h-[220vh] bg-[#07050D] border-t border-white/5">
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Apple-style Radial Ambient Glow behind the text */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 sm:h-96 bg-gradient-to-r from-[#7B68EE]/20 via-[#E01E5A]/15 to-[#00D2FF]/20 blur-[130px] pointer-events-none" 
        />

        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10 text-center">
          {/* Apple-style Section Category Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/90 uppercase tracking-widest mb-8 sm:mb-12 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>The Krudex Engineering Standard</span>
          </div>

          {/* Apple-style Kinetic Word Light-up on Scroll Scrub */}
          <div className="font-heading font-black text-2xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.3] sm:leading-[1.25] max-w-4xl select-none">
            {words.map((word, i) => {
              // Word illuminates sequentially as scroll progress advances from 0.05 to 0.90
              const step = 0.85 / words.length;
              const start = 0.05 + i * step;
              const end = start + step * 0.9;
              const cleanWord = word.replace(/[.,]/g, '');
              const isHighlight = highlights.includes(word) || highlights.includes(cleanWord);

              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlight={isHighlight}
                >
                  {word}
                </Word>
              );
            })}
          </div>

          {/* Apple-style Interactive Scrub Indicator & Progress Bar */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center gap-3">
            <div className="w-48 sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                style={{ width: progressBarWidth }}
                className="h-full bg-gradient-to-r from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] rounded-full"
              />
            </div>
            
            <div className="text-[11px] font-mono tracking-widest uppercase text-white/40 flex items-center gap-2">
              <Terminal className="w-3 h-3 text-[#10B981]" />
              <span>SCROLL TO ADVANCE ARCHITECTURE SCRUB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
