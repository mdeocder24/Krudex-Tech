"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, FolderGit } from 'lucide-react';
import { PROGRAMS, programEnquiryHref, type ProgramId } from '@/content/training';
import { PROGRAM_ICONS } from './programIcons';

/**
 * Tabs for the three training programs. Every panel stays in the HTML (only
 * hidden), so the full curriculum is crawlable. A link to #program-<id>
 * opens that tab.
 */
export default function ProgramExplorer() {
  const [active, setActive] = useState<ProgramId>('aiml');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.replace('#program-', '');
      if (PROGRAMS.some((p) => p.id === id)) setActive(id as ProgramId);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, []);

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = PROGRAMS.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (e.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next === null) return;
    e.preventDefault();
    const id = PROGRAMS[next].id;
    setActive(id);
    tabRefs.current[id]?.focus();
  }

  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-12">
          <h2 id="programs-title" className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
            Three programs. One way of teaching.
          </h2>
          <p className="text-krudex-muted text-base leading-relaxed">
            Every program moves from fundamentals to a deployed capstone project, taught by industry experts in collaboration with NovaSkill Hub.
          </p>
        </div>

        {/* Tabs: scroll sideways on narrow screens instead of wrapping. */}
        <div className="-mx-6 px-6 overflow-x-auto md:mx-0 md:px-0 [scrollbar-width:none]">
          <div role="tablist" aria-label="Training programs" className="inline-flex gap-2 rounded-full border border-krudex-border bg-krudex-card/40 p-1.5">
            {PROGRAMS.map((p, i) => {
              const Icon = PROGRAM_ICONS[p.id];
              const selected = p.id === active;
              return (
                <button
                  key={p.id}
                  ref={(el) => { tabRefs.current[p.id] = el; }}
                  id={`program-${p.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`program-panel-${p.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(p.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`scroll-mt-32 inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-medium transition-[background-color,color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-krudex-accent ${
                    selected ? 'bg-krudex-accent text-krudex-black' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {/* Phones show "Java" / "Python" so all three tabs fit. */}
                  {p.shortTitle.replace(' Full Stack', '')}
                  {p.shortTitle.endsWith(' Full Stack') && <span className="hidden sm:inline">&nbsp;Full Stack</span>}
                </button>
              );
            })}
          </div>
        </div>

        {PROGRAMS.map((p) => {
          const Icon = PROGRAM_ICONS[p.id];
          return (
            <div
              key={p.id}
              id={`program-panel-${p.id}`}
              role="tabpanel"
              aria-labelledby={`program-${p.id}`}
              hidden={p.id !== active}
              tabIndex={0}
              className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 focus-visible:outline-none"
            >
              <div className="lg:col-span-5 flex flex-col items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-krudex-border bg-krudex-card/60">
                  <Icon aria-hidden="true" className="h-5 w-5 text-krudex-accent" />
                </div>
                <h3 className="mt-6 text-white text-3xl font-bold">{p.title}</h3>
                <p className="mt-3 text-white/80 text-lg leading-snug">{p.tagline}</p>
                <p className="mt-5 text-krudex-muted text-sm leading-relaxed">{p.description}</p>

                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-muted">Who it suits</p>
                <p className="mt-2 text-white/80 text-sm leading-relaxed">{p.forWho}</p>

                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-muted">Tools you will use</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tool) => (
                    <li key={tool} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">
                      {tool}
                    </li>
                  ))}
                </ul>

                <Link
                  href={programEnquiryHref(p.id)}
                  className="group mt-10 inline-flex items-center gap-2 bg-krudex-accent text-krudex-black px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-krudex-accent-hover active:scale-[0.97] transition-[background-color,transform] duration-200"
                >
                  Enquire about {p.shortTitle}
                  <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="lg:col-span-7 min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-krudex-muted mb-4">Curriculum</p>
                <ol className="flex flex-col gap-2">
                  {p.modules.map((m, i) => (
                    <li key={m.title} className="flex gap-5 border border-krudex-border bg-krudex-card/40 p-5">
                      <span className="font-mono text-sm text-krudex-muted pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <h4 className="text-white font-medium">{m.title}</h4>
                        <p className="mt-1 text-krudex-muted text-sm leading-relaxed">{m.topics}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-4 flex gap-5 border border-krudex-accent/40 bg-krudex-accent/[0.06] p-5">
                  <FolderGit aria-hidden="true" className="h-5 w-5 shrink-0 text-krudex-accent mt-0.5" />
                  <div className="min-w-0">
                    <h4 className="text-white font-medium">Capstone project</h4>
                    <p className="mt-1 text-white/75 text-sm leading-relaxed">{p.capstone}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
