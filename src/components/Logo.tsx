import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'mark' | 'full';
}

export const Logo: React.FC<LogoProps> = ({ className = '', width = 180, height = 60, variant = 'full' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 3D Orbit & K Icon */}
      <svg
        width={height}
        height={height}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(229,43,59,0.35)] shrink-0"
      >
        <defs>
          <linearGradient id="crimsonSwoosh" x1="10%" y1="90%" x2="90%" y2="10%">
            <stop offset="0%" stopColor="#C41E3A" />
            <stop offset="50%" stopColor="#E52B3B" />
            <stop offset="100%" stopColor="#FF4D5E" />
          </linearGradient>
          <filter id="crimsonGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Thin Crimson Orbit (Back) */}
        <path
          d="M 20 80 Q 5 50 40 25 T 100 20"
          stroke="#FF4D5E"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
          filter="url(#crimsonGlow)"
        />
        <path
          d="M 100 20 Q 115 50 80 75 T 20 80"
          stroke="#FF4D5E"
          strokeWidth="1.5"
          fill="none"
          opacity="0.8"
          filter="url(#crimsonGlow)"
        />

        {/* Thick Crimson Swoosh (Front/Bottom) */}
        <path
          d="M 25 70 C 10 50, 40 40, 50 45 C 55 47, 85 70, 75 80 C 60 95, 30 85, 25 70 Z"
          fill="url(#crimsonSwoosh)"
          opacity="0.95"
        />

        {/* Thick Crimson Swoosh (Top) */}
        <path
          d="M 95 30 C 110 50, 80 60, 70 55 C 65 53, 35 30, 45 20 C 60 5, 90 15, 95 30 Z"
          fill="url(#crimsonSwoosh)"
          opacity="0.95"
        />

        {/* Crisp White 'K' */}
        <text
          x="50"
          y="72"
          fontSize="60"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fill="#FAF7F8"
          textAnchor="middle"
          style={{ letterSpacing: '-2px' }}
        >
          K
        </text>
      </svg>

      {/* Text Wordmark */}
      {variant === 'full' && (
        <div className="flex flex-col select-none">
          <span className="text-white text-xl font-bold tracking-[0.2em] leading-none font-sans">
            KRUDEX
          </span>
          <span className="text-krudex-accent text-[0.62rem] font-bold tracking-[0.35em] uppercase mt-1">
            Technologies
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
