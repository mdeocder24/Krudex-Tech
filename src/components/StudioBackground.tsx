"use client";

import React from 'react';

/**
 * StudioBackground
 * Provides an architectural, executive-grade dark canvas:
 * - Subtle precision coordinate grid with radial vignette mask
 * - Overhead architectural light shelf (warm crimson-charcoal studio cone)
 * - Structural vertical grid guides (bounding max-w-7xl)
 * - Micro-film grain noise overlay
 */
export default function StudioBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep studio base gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0B090C] via-[#080608] to-[#050406]" 
      />

      {/* 2. Top studio ambient illumination (subtle crimson warmth, never oversaturated) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] pointer-events-none opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(229, 43, 59, 0.22) 0%, rgba(229, 43, 59, 0.05) 50%, transparent 80%)',
        }}
      />

      {/* 3. Secondary subtle bottom-center ambient wash */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(229, 43, 59, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* 4. Precision Architectural Grid with radial falloff mask */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 75% 60% at 50% 20%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 60% at 50% 20%, black 40%, transparent 85%)',
        }}
      />

      {/* 5. Architectural Horizon line at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-krudex-accent/35 to-transparent opacity-80" />

      {/* 6. Structural vertical layout guides (framing the content container like Stripe/Linear) */}
      <div className="max-w-7xl mx-auto h-full w-full px-6 md:px-14 lg:px-20 relative">
        <div className="absolute inset-y-0 left-6 md:left-14 lg:left-20 w-[1px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />
        <div className="absolute inset-y-0 right-6 md:right-14 lg:right-20 w-[1px] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent" />
      </div>

      {/* 7. Organic SVG micro-grain texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay">
        <filter id="studio-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#studio-grain)" />
      </svg>
    </div>
  );
}
