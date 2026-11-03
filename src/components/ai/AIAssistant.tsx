"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, Loader2, Sparkles, X } from 'lucide-react';
import { useAiEnabled } from './useAiEnabled';

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  'What services do you offer?',
  'How does a project start?',
  'Do you train students?',
  'Who owns the code at the end?',
];

const EASE = [0.23, 1, 0.32, 1] as const;

/**
 * "Ask Krudex": floating AI assistant, stacked above the WhatsApp button.
 * Answers come from /api/ai/chat as a plain-text stream. Hidden entirely
 * when AI is not configured on the server.
 */
export default function AIAssistant() {
  const enabled = useAiEnabled();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  useEffect(() => () => abortRef.current?.abort(), []);

  async function send(text: string) {
    const content = text.trim().slice(0, 1000);
    if (!content || busy) return;
    const history: Msg[] = [...messages, { role: 'user', content }];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setBusy(true);

    const controller = new AbortController();
    abortRef.current = controller;
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = '';
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages([...history, { role: 'assistant', content: reply }]);
      }
    } catch (error) {
      if (controller.signal.aborted) return;
      const message = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setMessages([...history, { role: 'assistant', content: message }]);
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  if (!enabled) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close Krudex assistant' : 'Ask Krudex, AI assistant'}
        aria-expanded={open}
        aria-controls="krudex-assistant"
        className="fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+4.25rem)] right-[max(1.25rem,env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-2xl border border-krudex-accent/40 bg-krudex-card text-krudex-accent shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-krudex-accent active:scale-[0.95]"
      >
        {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Sparkles aria-hidden="true" className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="krudex-assistant"
            role="dialog"
            aria-label="Ask Krudex, AI assistant"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.12 } }}
            transition={{ duration: 0.22, ease: EASE }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+8.5rem)] right-[max(1rem,env(safe-area-inset-right))] z-50 flex h-[min(560px,calc(100dvh-11rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-krudex-border bg-krudex-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center gap-3 border-b border-krudex-border px-5 py-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-krudex-accent/15 text-krudex-accent">
                <Sparkles aria-hidden="true" className="h-[18px] w-[18px]" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Ask Krudex</p>
                <p className="text-xs text-krudex-muted">AI assistant · answers from our site</p>
              </div>
            </div>

            <div ref={logRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-5 py-4">
              {messages.length === 0 && (
                <div>
                  <p className="text-sm leading-relaxed text-white/80">
                    Hi! Ask me about our services, how projects work, or student training.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-left text-xs text-white/75 transition-colors hover:border-krudex-accent/60 hover:text-white"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex'}>
                  <p
                    className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'rounded-br-md bg-krudex-accent text-krudex-black'
                        : 'rounded-bl-md border border-krudex-border bg-krudex-card text-white/90'
                    }`}
                  >
                    {m.content || <Loader2 aria-label="Thinking" className="h-4 w-4 animate-spin text-krudex-muted" />}
                  </p>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="border-t border-krudex-border p-3"
            >
              <div className="flex items-end gap-2 rounded-xl border border-white/15 bg-white/[0.03] p-2 focus-within:border-krudex-accent">
                <label htmlFor="krudex-assistant-input" className="sr-only">
                  Your question
                </label>
                <textarea
                  id="krudex-assistant-input"
                  ref={inputRef}
                  rows={1}
                  maxLength={1000}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                  placeholder="Ask a question…"
                  className="max-h-28 min-h-9 flex-1 resize-none bg-transparent px-2 py-1.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Send"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-krudex-accent text-krudex-black transition-[opacity,transform] duration-150 active:scale-[0.95] disabled:opacity-40"
                >
                  {busy ? <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> : <ArrowUp aria-hidden="true" className="h-4 w-4" />}
                </button>
              </div>
              <p className="mt-2 px-1 text-[11px] leading-snug text-krudex-muted">
                AI answers can be wrong. For quotes and dates,{' '}
                <Link href="/contact" className="text-white/80 underline underline-offset-2" onClick={() => setOpen(false)}>
                  contact the team
                </Link>
                .
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
