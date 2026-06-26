import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', width = 180, height = 180 }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} style={{ width, height }}>
      {/* 3D Orbit & K Icon */}
      <svg width="100%" height="70%" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
        <defs>
          <linearGradient id="blueSwoosh" x1="10%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#3b82f6" /> {/* bright blue */}
            <stop offset="100%" stopColor="#60a5fa" /> {/* lighter blue */}
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Thin Cyan Orbit (Back) */}
        <path d="M 20 80 Q 5 50 40 25 T 100 20" stroke="#06b6d4" strokeWidth="1.5" fill="none" filter="url(#glow)" />
        <path d="M 100 20 Q 115 50 80 75 T 20 80" stroke="#06b6d4" strokeWidth="1.5" fill="none" filter="url(#glow)" />

        {/* Thick Blue Swoosh (Front/Bottom) */}
        <path d="M 25 70 C 10 50, 40 40, 50 45 C 55 47, 85 70, 75 80 C 60 95, 30 85, 25 70 Z" fill="url(#blueSwoosh)" opacity="0.9" />
        
        {/* Thick Blue Swoosh (Top) */}
        <path d="M 95 30 C 110 50, 80 60, 70 55 C 65 53, 35 30, 45 20 C 60 5, 90 15, 95 30 Z" fill="url(#blueSwoosh)" opacity="0.9" />

        {/* The White 'K' */}
        <text x="50" y="72" fontSize="60" fontFamily="sans-serif" fontWeight="bold" fill="#ffffff" textAnchor="middle" style={{ letterSpacing: '-2px' }}>
          K
        </text>
      </svg>
      
      {/* Text Wordmark */}
      <div className="flex flex-col items-center mt-[-10px]">
        <span className="text-white text-2xl font-bold tracking-widest leading-none font-sans">
          KRUDEX
        </span>
        <span className="text-[#06b6d4] text-[0.6rem] font-bold tracking-[0.3em] uppercase mt-1">
          Technologies
        </span>
      </div>
    </div>
  );
};
