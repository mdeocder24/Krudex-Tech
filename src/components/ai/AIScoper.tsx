"use client";

import { useState } from 'react';
import { Loader2, Sparkles, Check } from 'lucide-react';
import { postAi, useAiEnabled } from './useAiEnabled';

export interface ScopeResult {
  services: string[];
  summary: string;
  phases: string[];
  timeline: 'asap' | '1-3-months' | '3-6-months' | 'flexible';
  questions: string[];
  brief: string;
}

const TIMELINE_LABEL: Record<ScopeResult['timeline'], string> = {
  asap: 'ASAP',
  '1-3-months': '1 – 3 months',
  '3-6-months': '3 – 6 months',
  flexible: 'Flexible',
};

/**
 * AI project scoper on the contact form: the visitor describes an idea in
 * plain words; the AI suggests services, a rough plan and a tidy brief, and
 * "Use this" fills the form. Hidden when AI is not configured.
 */
export default function AIScoper({ onApply }: { onApply: (result: ScopeResult) => void }) {
  const enabled = useAiEnabled();
  const [idea, setIdea] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ScopeResult | null>(null);
  const [applied, setApplied] = useState(false);

  if (!enabled) return null;

  async function scope() {
    if (idea.trim().length < 10 || busy) return;
    setBusy(true);
    setError('');
    setApplied(false);
    try {
      setResult(await postAi<ScopeResult>('/api/ai/scope', { idea }));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-lg border border-krudex-accent/30 bg-krudex-accent/[0.04] p-5">
      <div className="flex items-center gap-2 text-krudex-accent">
        <Sparkles aria-hidden="true" className="h-4 w-4" />
        <p className="text-[13px] font-semibold">Not sure what to ask for? Let AI scope it</p>
      </div>
      <label htmlFor="ai-idea" className="mt-3 block text-[13px] text-white/70">
        Describe your idea in a sentence or two
      </label>
      <textarea
        id="ai-idea"
        rows={3}
        maxLength={2000}
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="e.g. An app where my gym members can book classes and pay monthly"
        className="mt-2 w-full resize-y rounded-md border border-white/15 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/30 transition-colors hover:border-white/30 focus:border-krudex-accent focus:outline-none focus:ring-1 focus:ring-krudex-accent md:text-sm"
      />
      <button
        type="button"
        onClick={scope}
        disabled={busy || idea.trim().length < 10}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-krudex-accent/60 px-5 text-sm font-medium text-white transition-[background-color,color,opacity,transform] duration-200 hover:bg-krudex-accent hover:text-krudex-black active:scale-[0.97] disabled:opacity-40"
      >
        {busy ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <Sparkles aria-hidden="true" className="h-4 w-4" />}
        {busy ? 'Scoping…' : 'Scope it with AI'}
      </button>
      {error && (
        <p role="alert" className="mt-3 text-sm text-white/80">
          {error}
        </p>
      )}

      {result && (
        <div aria-live="polite" className="mt-5 space-y-4 border-t border-white/10 pt-5 text-sm">
          <p className="leading-relaxed text-white/90">{result.summary}</p>
          <div className="flex flex-wrap gap-2">
            {result.services.map((s) => (
              <span key={s} className="rounded-full border border-krudex-accent/50 px-3 py-1 text-xs text-krudex-accent">
                {s}
              </span>
            ))}
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70">
              First version: {TIMELINE_LABEL[result.timeline]}
            </span>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-muted">Rough plan</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-white/80">
              {result.phases.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-muted">We&apos;ll ask you</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-white/80">
              {result.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => {
              onApply(result);
              setApplied(true);
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-krudex-accent px-5 text-sm font-semibold text-krudex-black transition-[background-color,transform] duration-200 hover:bg-krudex-accent-hover active:scale-[0.97]"
          >
            {applied ? <Check aria-hidden="true" className="h-4 w-4" /> : null}
            {applied ? 'Added to your inquiry' : 'Use this in my inquiry'}
          </button>
          <p className="text-xs text-krudex-muted">AI suggestion, not a quote. The team confirms scope and cost on a free call.</p>
        </div>
      )}
    </div>
  );
}
