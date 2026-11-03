"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircleQuestion, Search, X } from 'lucide-react';
import { faqs } from '@/lib/faqs';
import { OFFERINGS, TRAINING } from '@/content/offerings';
import { WHATSAPP_URL } from '@/lib/site';

/**
 * "Quick answers": a floating help panel that searches the site's own FAQ,
 * services and training content in the browser. No API, no cost, no data
 * leaves the page. Stacked above the WhatsApp button.
 */

interface Entry {
  q: string;
  a: string;
  href?: string;
}

const ENTRIES: Entry[] = [
  ...faqs.map((f) => ({ q: f.question, a: f.answer })),
  ...OFFERINGS.map((o) => ({ q: `${o.title}: what do you offer?`, a: `${o.summary} ${o.outcome}`, href: o.href })),
  { q: 'Student training: what can I learn?', a: TRAINING.summary, href: '/training' },
];

const STOP = new Set('a an and are as at be can do does for from how i in is it me my of on or our the this to we what when where which who why will with you your'.split(' '));

// Visitor words that should also match words used in the content.
const SYNONYMS: Record<string, string[]> = {
  price: ['cost', 'project', 'size', 'minimum'],
  pricing: ['cost', 'project', 'size', 'minimum'],
  cost: ['project', 'size', 'minimum'],
  app: ['mobile', 'ios', 'android'],
  website: ['web', 'platforms', 'saas'],
  site: ['web', 'platforms'],
  seo: ['marketing', 'search'],
  ads: ['google', 'marketing'],
  course: ['training', 'students'],
  courses: ['training', 'students'],
  learn: ['training', 'students'],
  student: ['training', 'students'],
  ai: ['ml', 'machine', 'llm'],
  code: ['ip', 'source', 'owns'],
  own: ['ip', 'owns', 'source'],
  support: ['maintenance', 'launch'],
  abroad: ['international', 'clients'],
  security: ['data', 'compliance'],
};

const words = (text: string) => text.toLowerCase().match(/[a-z0-9]+/g) ?? [];

function search(query: string): Entry[] {
  const terms = words(query).filter((w) => !STOP.has(w));
  if (!terms.length) return [];
  const expanded = new Set(terms.flatMap((t) => [t, ...(SYNONYMS[t] ?? [])]));
  return ENTRIES.map((e) => {
    const q = new Set(words(e.q));
    const a = new Set(words(e.a));
    let score = 0;
    for (const t of expanded) {
      // Questions count double; allow simple plurals/prefixes.
      for (const w of q) if (w === t || (t.length > 3 && w.startsWith(t))) score += 2;
      for (const w of a) if (w === t || (t.length > 3 && w.startsWith(t))) score += 1;
    }
    return { e, score };
  })
    .filter((r) => r.score > 1)
    .sort((x, y) => y.score - x.score)
    .slice(0, 3)
    .map((r) => r.e);
}

const SUGGESTED = faqs.slice(0, 4).map((f) => f.question);
const EASE = [0.23, 1, 0.32, 1] as const;

export default function QuickAnswers() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => search(submitted), [submitted]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = (q: string) => {
    setQuery(q);
    setSubmitted(q);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close quick answers' : 'Quick answers: questions about Krudex'}
        aria-expanded={open}
        aria-controls="quick-answers"
        className="fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+4.25rem)] right-[max(1.25rem,env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-2xl border border-krudex-accent/40 bg-krudex-card text-krudex-accent shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-krudex-accent active:scale-[0.95]"
      >
        {open ? <X aria-hidden="true" className="h-6 w-6" /> : <MessageCircleQuestion aria-hidden="true" className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="quick-answers"
            role="dialog"
            aria-label="Quick answers"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.12 } }}
            transition={{ duration: 0.22, ease: EASE }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+8.5rem)] right-[max(1rem,env(safe-area-inset-right))] z-50 flex max-h-[min(560px,calc(100dvh-11rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-krudex-border bg-krudex-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center gap-3 border-b border-krudex-border px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-krudex-accent/15 text-krudex-accent">
                <MessageCircleQuestion aria-hidden="true" className="h-[18px] w-[18px]" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Quick answers</p>
                <p className="text-xs text-krudex-muted">Search our services and FAQ</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(query);
              }}
              className="border-b border-krudex-border p-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-3 focus-within:border-krudex-accent">
                <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-krudex-muted" />
                <label htmlFor="quick-answers-input" className="sr-only">
                  Your question
                </label>
                <input
                  id="quick-answers-input"
                  ref={inputRef}
                  value={query}
                  maxLength={200}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSubmitted(e.target.value);
                  }}
                  placeholder="e.g. Who owns the code?"
                  className="min-h-11 flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none focus-visible:outline-none"
                />
              </div>
            </form>

            <div aria-live="polite" className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
              {!submitted.trim() && (
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => ask(s)}
                      className="rounded-full border border-white/15 px-3 py-1.5 text-left text-xs text-white/75 transition-colors hover:border-krudex-accent/60 hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {submitted.trim() && results.length > 0 && (
                <ul className="space-y-3">
                  {results.map((r) => (
                    <li key={r.q} className="rounded-xl border border-krudex-border bg-krudex-card p-4">
                      <p className="text-sm font-semibold text-white">{r.q}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/75">{r.a}</p>
                      {r.href && (
                        <Link
                          href={r.href}
                          onClick={() => setOpen(false)}
                          className="group mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-krudex-accent"
                        >
                          Learn more
                          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {submitted.trim() && results.length === 0 && (
                <p className="text-sm leading-relaxed text-white/80">
                  No quick answer for that yet. Our team can help directly.
                </p>
              )}
            </div>

            <div className="flex gap-2 border-t border-krudex-border p-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex min-h-10 flex-1 items-center justify-center rounded-full bg-krudex-accent text-sm font-semibold text-krudex-black transition-[background-color,transform] duration-150 hover:bg-krudex-accent-hover active:scale-[0.97]"
              >
                Contact us
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-10 flex-1 items-center justify-center rounded-full border border-white/20 text-sm font-medium text-white transition-[background-color,transform] duration-150 hover:bg-white/10 active:scale-[0.97]"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
