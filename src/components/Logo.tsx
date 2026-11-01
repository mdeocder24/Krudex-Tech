import React from 'react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* ClickUp-style Vibrant Gradient Logo Mark */}
      <div className="relative w-7 h-7 rounded-lg p-[1px] bg-gradient-to-tr from-[#7B68EE] via-[#E01E5A] to-[#00D2FF] shadow-[0_0_15px_rgba(123,104,238,0.5)] flex items-center justify-center shrink-0">
        <div className="w-full h-full bg-[#0D0A18] rounded-[7px] flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 16L12 8L20 16"
              stroke="url(#clickup-logo-grad)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 19L12 14L17 19"
              stroke="#00D2FF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.85"
            />
            <defs>
              <linearGradient id="clickup-logo-grad" x1="4" y1="8" x2="20" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7B68EE" />
                <stop offset="0.5" stopColor="#E01E5A" />
                <stop offset="1" stopColor="#00D2FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="flex items-center gap-2">
        <span className="font-heading font-black text-xl tracking-tight text-white">
          KRUDEX
        </span>
        <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#7B68EE]/20 via-[#E01E5A]/20 to-[#00D2FF]/20 text-[#A78BFA] border border-[#7B68EE]/30">
          STUDIO
        </span>
      </div>
    </div>
  );
}
