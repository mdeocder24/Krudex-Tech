"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';

type Key = 'goal' | 'level' | 'interest' | 'time';

const QUESTIONS: Array<{ key: Key; label: string; options: string[] }> = [
  { key: 'goal', label: 'What do you want from training?', options: ['Get my first job', 'Build my own product', 'Grow a business', 'Switch careers'] },
  { key: 'level', label: 'Where are you today?', options: ['Complete beginner', 'Know some basics', 'Built a few projects'] },
  { key: 'interest', label: 'What excites you most?', options: ['Building websites and apps', 'AI and data', 'Design and user experience', 'Marketing and growth'] },
  { key: 'time', label: 'How much time can you give?', options: ['A few hours a week', 'Evenings and weekends', 'Full time'] },
];

interface PathResult {
  track: string;
  headline: string;
  why: string;
  steps: string[];
  alsoConsider: string | null;
}

// Interest decides the track; each track lists its learning steps.
const TRACKS: Record<string, { track: string; steps: string[] }> = {
  'Building websites and apps': {
    track: 'SaaS & web development',
    steps: ['Web fundamentals: HTML, CSS and JavaScript', 'A modern framework like React and Next.js', 'Back ends, APIs and databases', 'Ship a real project end to end'],
  },
  'AI and data': {
    track: 'AI & machine learning',
    steps: ['Python and data basics', 'Core machine learning ideas', 'Working with LLMs and AI APIs', 'Add an AI feature to a real product'],
  },
  'Design and user experience': {
    track: 'UI/UX design',
    steps: ['Design basics: layout, type and colour', 'User research and flows', 'Prototyping in Figma', 'Design and test a complete product screen set'],
  },
  'Marketing and growth': {
    track: 'Google Ads & digital marketing',
    steps: ['How customers search and buy online', 'Google Ads and paid campaigns', 'SEO, social and content', 'Run and measure a campaign with GA4'],
  },
};

// A goal can point to a useful second topic.
const ALSO: Record<string, string> = {
  'Build my own product': 'SaaS & web development',
  'Grow a business': 'Google Ads & digital marketing',
  'Get my first job': 'UI/UX design',
  'Switch careers': 'SaaS & web development',
};

const PACE: Record<string, string> = {
  'A few hours a week': 'at a steady pace alongside your studies or work',
  'Evenings and weekends': 'with focused evening and weekend sessions',
  'Full time': 'at full speed',
};

function buildPath(a: Record<Key, string>): PathResult {
  const t = TRACKS[a.interest];
  const beginner = a.level === 'Complete beginner';
  const steps = beginner ? ['Start from zero with guided fundamentals', ...t.steps.slice(1)] : t.steps;
  const also = ALSO[a.goal];
  return {
    track: t.track,
    headline: beginner ? `Start your ${t.track} journey` : `Level up in ${t.track}`,
    why: `You told us you want to ${a.goal.toLowerCase()} and enjoy ${a.interest.toLowerCase()}. This track builds those skills ${PACE[a.time]}, with guidance from industry experts.`,
    steps,
    alsoConsider: also && also !== t.track ? also : null,
  };
}

/** Four quick questions, then a suggested learning track. Runs in the browser. */
export default function TrainingPathFinder() {
  const [answers, setAnswers] = useState<Partial<Record<Key, string>>>({});
  const [result, setResult] = useState<PathResult | null>(null);

  const complete = QUESTIONS.every((q) => answers[q.key]);

  function find() {
    if (complete) setResult(buildPath(answers as Record<Key, string>));
  }

  return (
    <section aria-labelledby="path-finder-title" className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-8">
            <Compass aria-hidden="true" className="h-3.5 w-3.5 text-krudex-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">Path finder</span>
          </div>
          <h2 id="path-finder-title" className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
            Find your learning path.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed">
            Answer four quick questions and we suggest the track that fits you best. The team then shares the current format, dates and fees.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-8 min-w-0">
          {QUESTIONS.map((q) => (
            <fieldset key={q.key}>
              <legend className="text-[13px] font-medium text-white/80 mb-3">{q.label}</legend>
              <div className="flex flex-wrap gap-2.5">
                {q.options.map((opt) => (
                  <label key={opt} className="relative">
                    <input
                      type="radio"
                      name={`path-${q.key}`}
                      className="peer sr-only"
                      checked={answers[q.key] === opt}
                      onChange={() => setAnswers((a) => ({ ...a, [q.key]: opt }))}
                    />
                    <span className="inline-flex items-center min-h-11 cursor-pointer select-none rounded-full border border-white/15 px-4 text-[14px] text-white/70 transition-colors hover:border-white/40 hover:text-white peer-checked:border-krudex-accent peer-checked:bg-krudex-accent peer-checked:text-krudex-black peer-checked:font-medium peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-krudex-accent">
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}

          <button
            type="button"
            onClick={find}
            disabled={!complete}
            className="self-start inline-flex min-h-12 items-center gap-2 rounded-full bg-krudex-accent px-7 text-sm font-semibold text-krudex-black transition-[background-color,opacity,transform] duration-200 hover:bg-krudex-accent-hover active:scale-[0.97] disabled:opacity-40"
          >
            <Compass aria-hidden="true" className="h-4 w-4" />
            Suggest my path
          </button>

          <div aria-live="polite">
            {result && (
              <div className="border border-krudex-border bg-krudex-card/50 p-6 md:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-accent">Suggested track · {result.track}</p>
                <h3 className="mt-3 text-white text-xl font-bold">{result.headline}</h3>
                <p className="mt-3 text-krudex-muted text-sm leading-relaxed">{result.why}</p>
                <ol className="mt-5 space-y-2">
                  {result.steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-white/85">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 font-mono text-xs text-white">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
                {result.alsoConsider && (
                  <p className="mt-5 text-sm text-white/70">Later, also consider: <span className="text-white">{result.alsoConsider}</span></p>
                )}
                <Link
                  href="/contact?interest=training"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-krudex-accent transition-colors"
                >
                  Enquire about this track
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
