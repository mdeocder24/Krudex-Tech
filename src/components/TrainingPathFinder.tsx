"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Compass } from 'lucide-react';
import { getProgram, programEnquiryHref, type ProgramId } from '@/content/training';

type Key = 'goal' | 'level' | 'interest' | 'time';

const QUESTIONS: Array<{ key: Key; label: string; options: string[] }> = [
  { key: 'goal', label: 'What do you want from training?', options: ['Get my first job', 'Build my own product', 'Switch careers', 'Strengthen my skills'] },
  { key: 'level', label: 'Where are you today?', options: ['Complete beginner', 'Know some basics', 'Built a few projects'] },
  { key: 'interest', label: 'What excites you most?', options: ['AI, data and smart features', 'Large, structured enterprise apps', 'Building web apps quickly, end to end'] },
  { key: 'time', label: 'How much time can you give?', options: ['A few hours a week', 'Evenings and weekends', 'Full time'] },
];

interface PathResult {
  programId: ProgramId;
  track: string;
  headline: string;
  why: string;
  steps: string[];
  alsoConsider: string | null;
}

// Interest decides the program.
const PROGRAM_FOR_INTEREST: Record<string, ProgramId> = {
  'AI, data and smart features': 'aiml',
  'Large, structured enterprise apps': 'java',
  'Building web apps quickly, end to end': 'python',
};

// A useful second program once the first is done.
const ALSO: Record<ProgramId, ProgramId> = {
  aiml: 'python',
  java: 'aiml',
  python: 'aiml',
};

const PACE: Record<string, string> = {
  'A few hours a week': 'at a steady pace alongside your studies or work',
  'Evenings and weekends': 'with focused evening and weekend sessions',
  'Full time': 'at full speed',
};

function buildPath(a: Record<Key, string>): PathResult {
  const program = getProgram(PROGRAM_FOR_INTEREST[a.interest])!;
  const beginner = a.level === 'Complete beginner';
  const modules = program.modules.map((m) => m.title);
  const steps = [
    ...(beginner ? ['Start from zero with guided fundamentals'] : []),
    ...modules,
    'Build and deploy your capstone project',
  ];
  return {
    programId: program.id,
    track: program.title,
    headline: beginner ? `Start your ${program.title} journey` : `Level up with ${program.title}`,
    why: `You told us you want to ${a.goal.toLowerCase()} and enjoy ${a.interest.toLowerCase()}. This program builds those skills ${PACE[a.time]}, with guidance from industry experts.`,
    steps,
    alsoConsider: getProgram(ALSO[program.id])?.title ?? null,
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
            Answer four quick questions and we suggest the program that fits you best. The team then shares the current format, dates and fees.
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
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-accent">Suggested program · {result.track}</p>
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
                  href={programEnquiryHref(result.programId)}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-krudex-accent transition-colors"
                >
                  Enquire about this program
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
