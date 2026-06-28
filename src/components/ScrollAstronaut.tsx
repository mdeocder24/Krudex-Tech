"use client";

import React, { useEffect, useState } from 'react';

const ScrollAstronaut = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map scroll progress to vertical position (5% to 85% of viewport)
  const topPosition = 5 + scrollProgress * 80;

  return (
    <div
      className="fixed right-5 z-30 pointer-events-none hidden sm:block transition-none"
      style={{
        top: `${topPosition}vh`,
        opacity: 0.4,
        transform: `rotate(${Math.sin(scrollProgress * Math.PI * 4) * 8}deg)`,
      }}
    >
      {/* CSS floating animation wrapper */}
      <div className="animate-float">
        <svg
          width="48"
          height="64"
          viewBox="0 0 48 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Helmet / Head */}
          <circle cx="24" cy="12" r="10" fill="#333" stroke="#555" strokeWidth="1" />
          {/* Visor */}
          <ellipse cx="24" cy="11" rx="7" ry="5.5" fill="#b87333" opacity="0.9" />
          {/* Visor glint */}
          <ellipse cx="21" cy="9" rx="2" ry="1.2" fill="#e8a84c" opacity="0.6" />

          {/* Body / Torso */}
          <rect x="16" y="22" width="16" height="18" rx="4" fill="#2a2a2a" stroke="#444" strokeWidth="0.5" />
          {/* Chest detail */}
          <rect x="20" y="25" width="8" height="4" rx="1" fill="#3a3a3a" />
          <circle cx="24" cy="27" r="1" fill="#b87333" opacity="0.6" />

          {/* Backpack */}
          <rect x="32" y="24" width="6" height="14" rx="2" fill="#222" stroke="#444" strokeWidth="0.5" />

          {/* Left Arm */}
          <rect x="8" y="24" width="8" height="4" rx="2" fill="#2a2a2a" stroke="#444" strokeWidth="0.5" />
          <rect x="6" y="27" width="5" height="4" rx="2" fill="#333" />

          {/* Right Arm - waving */}
          <g transform="rotate(-30 38 24)">
            <rect x="36" y="20" width="4" height="10" rx="2" fill="#2a2a2a" stroke="#444" strokeWidth="0.5" />
            <rect x="35" y="16" width="5" height="5" rx="2.5" fill="#333" />
          </g>

          {/* Left Leg */}
          <rect x="16" y="40" width="6" height="14" rx="3" fill="#252525" stroke="#444" strokeWidth="0.5" />
          {/* Left Boot */}
          <rect x="14" y="52" width="9" height="5" rx="2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" />

          {/* Right Leg */}
          <rect x="26" y="40" width="6" height="12" rx="3" fill="#252525" stroke="#444" strokeWidth="0.5" />
          {/* Right Boot */}
          <rect x="25" y="50" width="9" height="5" rx="2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" />

          {/* Tether / safety line */}
          <path d="M32 30 Q45 35, 42 50 Q40 58, 36 60" stroke="#555" strokeWidth="0.8" fill="none" strokeDasharray="2 2" opacity="0.5" />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(2deg); }
          50% { transform: translateY(-2px) rotate(-1deg); }
          75% { transform: translateY(-8px) rotate(1.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ScrollAstronaut;
