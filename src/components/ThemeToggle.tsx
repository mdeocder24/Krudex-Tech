"use client";

import { Moon, Sun } from 'lucide-react';
import { setTheme, useTheme } from '@/lib/theme';

/** Sun/moon switch. The icon shows the theme you will switch to. */
export default function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={`relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-[background-color,border-color,transform] duration-200 hover:border-krudex-accent hover:bg-white/10 active:scale-[0.95] ${className}`}
    >
      {/* Both icons are rendered; CSS shows the right one so the server HTML never mismatches. */}
      <Sun aria-hidden="true" className="kx-theme-icon-sun h-[18px] w-[18px]" />
      <Moon aria-hidden="true" className="kx-theme-icon-moon h-[18px] w-[18px]" />
    </button>
  );
}
