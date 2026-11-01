"use client";

import React from 'react';

/**
 * StudioBackground (ClickUp-Inspired Luminous Canvas)
 * - Deep midnight violet-slate canvas
 * - Atmospheric ClickUp ambient light orbs: violet, electric magenta, cyan
 * - Subtle precision micro-grid with radial falloff
 */
export default function StudioBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep midnight violet base */}
      <div className="absolute inset-0 bg-[#09070F]" />

      {/* 2. Top-Center Violet Ambient Glow (ClickUp Signature #7B68EE) */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-35 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 50% at 50% 0%, #7B68EE 0%, rgba(123, 104, 238, 0.2) 50%, transparent 80%)',
        }}
      />

      {/* 3. Top-Right Magenta/Pink Accent Glow (#E01E5A) */}
      <div 
        className="absolute top-20 right-[-10%] w-[800px] h-[550px] opacity-25 blur-[160px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #E01E5A 0%, rgba(224, 30, 90, 0.15) 50%, transparent 80%)',
        }}
      />

      {/* 4. Top-Left Cyan Accent Glow (#00D2FF) */}
      <div 
        className="absolute top-40 left-[-10%] w-[700px] h-[500px] opacity-20 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #00D2FF 0%, rgba(0, 210, 255, 0.1) 50%, transparent 80%)',
        }}
      />

      {/* 5. Precision Micro Grid with Radial Vignette Falloff */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 35%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 25%, black 35%, transparent 85%)',
        }}
      />

      {/* 6. Subtle glowing top horizon line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7B68EE]/40 to-transparent" />
    </div>
  );
}
