"use client";

import { useState } from 'react';
import { FileText, Loader2, Quote, Sparkles } from 'lucide-react';
import { postAi, useAiEnabled } from './useAiEnabled';
import { DEMO_DOCUMENT_TITLE, DEMO_SUGGESTIONS } from '@/lib/ai/demo-document';

/**
 * "Try it": a live document Q&A demo. Visitors ask a sample policy document a
 * question and see the answer with the exact passages it came from, the way
 * our AI integrations ground answers in a client's own data.
 */
export default function AIDemo() {
  const enabled = useAiEnabled();
  const [question, setQuestion] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ answer: string; citations: string[] } | null>(null);

  if (!enabled) return null;

  async function ask(q: string) {
    const text = q.trim();
    if (!text || busy) return;
    setQuestion(text);
    setBusy(true);
    setError('');
    setResult(null);
    try {
      setResult(await postAi('/api/ai/demo', { question: text }));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section aria-labelledby="ai-demo-title" className="mt-24 md:mt-32 border border-krudex-border bg-krudex-card/40">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-krudex-border p-8 md:p-12">
          <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5 text-krudex-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">Live AI demo</span>
          </div>
          <h2 id="ai-demo-title" className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 leading-tight">
            Ask a document. Get answers with sources.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed">
            This is how our AI integrations work on your own data: answers grounded in your documents, with the exact passages they came from. Try it on a sample policy.
          </p>
          <div className="mt-8 flex items-start gap-3 border border-krudex-border p-4">
            <FileText aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-krudex-accent" />
            <p className="text-sm text-white/80">
              {DEMO_DOCUMENT_TITLE}
              <span className="mt-1 block text-xs text-krudex-muted">A fictional company, made up for this demo.</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 md:p-12 min-w-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(question);
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="ai-demo-question" className="sr-only">
              Your question about the sample document
            </label>
            <input
              id="ai-demo-question"
              value={question}
              maxLength={300}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about plans, refunds, support…"
              className="min-h-12 flex-1 rounded-md border border-white/15 bg-white/[0.03] px-4 text-base text-white placeholder:text-white/30 transition-colors hover:border-white/30 focus:border-krudex-accent focus:outline-none focus:ring-1 focus:ring-krudex-accent md:text-sm"
            />
            <button
              type="submit"
              disabled={busy || !question.trim()}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-krudex-accent px-6 text-sm font-semibold text-krudex-black transition-[background-color,opacity,transform] duration-200 hover:bg-krudex-accent-hover active:scale-[0.97] disabled:opacity-40"
            >
              {busy ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : null}
              Ask
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {DEMO_SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => ask(s)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-krudex-accent/60 hover:text-white"
              >
                {s}
              </button>
            ))}
          </div>

          <div aria-live="polite" className="mt-8">
            {error && <p role="alert" className="text-sm text-white/80">{error}</p>}
            {result && (
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-white">{result.answer}</p>
                {result.citations.length > 0 && (
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-muted">Sources from the document</p>
                    <ul className="mt-3 space-y-2">
                      {result.citations.map((c) => (
                        <li key={c} className="flex gap-3 border-l-2 border-krudex-accent bg-white/[0.03] px-4 py-3 text-sm leading-relaxed text-white/75">
                          <Quote aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-krudex-accent" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
