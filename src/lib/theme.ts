"use client";

import { useSyncExternalStore } from 'react';
import { THEME_STORAGE_KEY } from './theme-script';

/**
 * Light / dark theme. The theme lives on <html data-theme="…">, set before
 * first paint by THEME_INIT_SCRIPT in theme-script.ts (no flash). A saved choice wins; with no
 * choice the site follows the OS setting, and keeps following it live.
 */

export type Theme = 'light' | 'dark';

function read(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Follow the OS while the visitor has not picked a theme themselves.
  const media = matchMedia('(prefers-color-scheme: light)');
  const onSystem = () => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(THEME_STORAGE_KEY);
    } catch {}
    if (saved !== 'light' && saved !== 'dark') applyTheme(media.matches ? 'light' : 'dark');
  };
  media.addEventListener('change', onSystem);

  return () => {
    observer.disconnect();
    media.removeEventListener('change', onSystem);
  };
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

/** Switch theme and remember the choice for this browser. */
export function setTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {}
}

/** Current theme; re-renders when it changes. `dark` on the server. */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, read, () => 'dark');
}
