"use client";

import { useSyncExternalStore } from 'react';

type NavigatorHints = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean };
};

let cached: boolean | null = null;

function detect(): boolean {
  if (cached !== null) return cached;
  const nav = navigator as NavigatorHints;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = nav.connection?.saveData === true;
  const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2;

  let webgl = false;
  try {
    const canvas = document.createElement('canvas');
    webgl = !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    webgl = false;
  }

  cached = webgl && !reducedMotion && !saveData && !lowMemory;
  return cached;
}

const subscribe = () => () => {};

/**
 * Whether decorative WebGL scenes should run on this device.
 * Returns null during SSR and hydration, then true/false on the client.
 * False for reduced-motion users, Save-Data, ≤2 GB devices, or no WebGL.
 */
export function useCan3D(): boolean | null {
  return useSyncExternalStore(subscribe, detect, () => null);
}
