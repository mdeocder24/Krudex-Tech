"use client";

import { useEffect, useState } from 'react';

let status: Promise<boolean> | null = null;

/** True once the server confirms AI features are on. One request per page load. */
export function useAiEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    status ??= fetch('/api/ai/status', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : { enabled: false }))
      .then((d: { enabled?: boolean }) => Boolean(d.enabled))
      .catch(() => false);
    let alive = true;
    status.then((v) => alive && setEnabled(v));
    return () => {
      alive = false;
    };
  }, []);
  return enabled;
}

/** POST JSON to an AI route; throws an Error with the server's message on failure. */
export async function postAi<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.error || 'Something went wrong. Please try again.');
  return data as T;
}
