"use client";

import { useState } from 'react';
import { Check, Wand2 } from 'lucide-react';

/**
 * Contact-form helper: the visitor describes an idea in plain words and we
 * suggest which services to tick, by keyword matching in the browser.
 * No API, no cost. "Use these" selects the services and adds the idea to
 * the details field.
 */

const RULES: Array<{ service: string; words: string[] }> = [
  { service: 'Web platform', words: ['website', 'web', 'saas', 'portal', 'dashboard', 'platform', 'crm', 'erp', 'booking', 'ecommerce', 'e-commerce', 'store', 'shop', 'marketplace', 'admin', 'software', 'tool'] },
  { service: 'Mobile app', words: ['app', 'apps', 'mobile', 'android', 'ios', 'iphone', 'phone', 'play store', 'app store'] },
  { service: 'AI integration', words: ['ai', 'chatbot', 'chat bot', 'gpt', 'llm', 'machine learning', 'ml', 'automation', 'automate', 'recommendation', 'vision', 'predict', 'assistant'] },
  { service: 'UI/UX design', words: ['design', 'ui', 'ux', 'logo', 'brand', 'branding', 'figma', 'prototype', 'redesign', 'look', 'identity', 'pitch deck'] },
  { service: 'Google Ads', words: ['google ads', 'ads', 'adwords', 'ppc', 'paid', 'campaign', 'leads'] },
  { service: 'Digital marketing', words: ['marketing', 'seo', 'social', 'instagram', 'facebook', 'linkedin', 'content', 'traffic', 'grow', 'growth', 'customers', 'sales', 'email marketing'] },
  { service: 'Student training', words: ['student', 'students', 'learn', 'learning', 'course', 'training', 'internship', 'college', 'teach', 'career'] },
];

function suggest(idea: string): string[] {
  const text = ` ${idea.toLowerCase().replace(/[^a-z0-9+\- ]+/g, ' ')} `;
  return RULES.filter((r) => r.words.some((w) => text.includes(` ${w} `) || text.includes(` ${w}s `))).map((r) => r.service);
}

export default function ServiceSuggester({
  onApply,
}: {
  onApply: (services: string[], idea: string) => void;
}) {
  const [idea, setIdea] = useState('');
  const [result, setResult] = useState<string[] | null>(null);
  const [applied, setApplied] = useState(false);

  return (
    <div className="rounded-lg border border-krudex-accent/30 bg-krudex-accent/[0.04] p-5">
      <div className="flex items-center gap-2 text-krudex-accent">
        <Wand2 aria-hidden="true" className="h-4 w-4" />
        <p className="text-[13px] font-semibold">Not sure what to pick? Describe your idea</p>
      </div>
      <label htmlFor="idea-helper" className="mt-3 block text-[13px] text-white/70">
        A sentence or two is enough
      </label>
      <textarea
        id="idea-helper"
        rows={3}
        maxLength={1000}
        value={idea}
        onChange={(e) => {
          setIdea(e.target.value);
          setApplied(false);
        }}
        placeholder="e.g. An app where my gym members can book classes, plus Google Ads to get new members"
        className="mt-2 w-full resize-y rounded-md border border-white/15 bg-white/[0.03] px-4 py-3 text-base text-white placeholder:text-white/30 transition-colors hover:border-white/30 focus:border-krudex-accent focus:outline-none focus:ring-1 focus:ring-krudex-accent md:text-sm"
      />
      <button
        type="button"
        onClick={() => setResult(suggest(idea))}
        disabled={idea.trim().length < 5}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-krudex-accent/60 px-5 text-sm font-medium text-white transition-[background-color,color,opacity,transform] duration-200 hover:bg-krudex-accent hover:text-krudex-black active:scale-[0.97] disabled:opacity-40"
      >
        <Wand2 aria-hidden="true" className="h-4 w-4" />
        Suggest services
      </button>

      {result && (
        <div aria-live="polite" className="mt-5 border-t border-white/10 pt-5 text-sm">
          {result.length ? (
            <>
              <p className="text-white/80">These look like a fit:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.map((s) => (
                  <span key={s} className="rounded-full border border-krudex-accent/50 px-3 py-1 text-xs text-krudex-accent">
                    {s}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  onApply(result, idea.trim());
                  setApplied(true);
                }}
                className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-krudex-accent px-5 text-sm font-semibold text-krudex-black transition-[background-color,transform] duration-200 hover:bg-krudex-accent-hover active:scale-[0.97]"
              >
                {applied && <Check aria-hidden="true" className="h-4 w-4" />}
                {applied ? 'Added to your inquiry' : 'Use these'}
              </button>
            </>
          ) : (
            <p className="text-white/80">
              We couldn&apos;t tell from that. Pick &quot;Not sure yet&quot; below and we&apos;ll work it out together on the call.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
