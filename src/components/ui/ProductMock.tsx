import type { MockKind } from '@/content/offerings';

/**
 * Illustrative product UI for each offering, drawn in HTML/CSS so it stays
 * sharp, light and on-palette. Decorative only (aria-hidden): the card text
 * carries the meaning.
 */

const panel = 'rounded-2xl border border-white/10 bg-[#13110F]/95 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]';
const line = (w: string, tone = 'bg-white/10') => <span className={`block h-2 rounded-full ${tone}`} style={{ width: w }} />;

function Saas() {
  const bars = [38, 52, 44, 63, 58, 74, 69, 86, 80, 94];
  return (
    <div className={`${panel} w-full max-w-[460px] overflow-hidden`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[10px] text-white/50">app.yourproduct.com/dashboard</span>
      </div>
      <div className="flex">
        <div className="hidden w-[26%] flex-col gap-3 border-r border-white/10 p-4 sm:flex">
          {line('70%', 'bg-krudex-accent/70')}
          {line('85%')}
          {line('60%')}
          {line('75%')}
          {line('50%')}
        </div>
        <div className="flex-1 p-4">
          <div className="grid grid-cols-3 gap-2">
            {[
              ['Revenue', '+18%'],
              ['Users', '12.4k'],
              ['Churn', '1.9%'],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/[0.05] p-2.5">
                <p className="text-[9px] uppercase tracking-wider text-white/45">{k}</p>
                <p className="mt-1 text-sm font-bold text-white">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-28 items-end gap-1.5 rounded-xl bg-white/[0.03] p-3">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-md ${i === bars.length - 1 ? 'bg-krudex-accent' : 'bg-krudex-accent/35'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="flex min-w-0 max-w-full items-end gap-4">
      <div className="relative w-[190px] max-w-full rounded-[34px] border border-white/15 bg-[#0E0D0B] p-2.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] sm:w-[210px]">
        <div className="mx-auto mb-2 h-4 w-20 rounded-full bg-black" />
        <div className="rounded-[24px] bg-[#16130F] p-3">
          <p className="text-[10px] text-white/45">Good morning</p>
          <p className="text-sm font-bold text-white">Your orders</p>
          <div className="mt-3 rounded-2xl bg-gradient-to-br from-krudex-accent to-[#8F6C3C] p-3 text-krudex-black">
            <p className="text-[9px] font-semibold uppercase tracking-wider opacity-70">Arriving today</p>
            <p className="mt-1 text-[15px] font-extrabold">Order #2041</p>
            <div className="mt-2 h-1.5 rounded-full bg-black/15">
              <div className="h-full w-2/3 rounded-full bg-krudex-black/70" />
            </div>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mt-2 flex items-center gap-2 rounded-xl bg-white/[0.05] p-2">
              <span className="h-7 w-7 shrink-0 rounded-lg bg-white/10" />
              <div className="flex-1 space-y-1.5">
                {line(i === 1 ? '60%' : '80%', 'bg-white/20')}
                {line('45%')}
              </div>
            </div>
          ))}
          <div className="mt-3 flex justify-around rounded-xl bg-white/[0.04] py-2">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-krudex-accent' : 'bg-white/25'}`} />
            ))}
          </div>
        </div>
      </div>
      <div className={`${panel} mb-8 hidden w-[150px] p-3 sm:block`}>
        <p className="text-[9px] uppercase tracking-wider text-white/45">Push</p>
        <p className="mt-1 text-[12px] font-semibold leading-snug text-white">Your order is out for delivery</p>
        <p className="mt-2 text-[10px] text-krudex-accent">iOS · Android</p>
      </div>
    </div>
  );
}

function Ai() {
  return (
    <div className={`${panel} w-full max-w-[440px] p-4`}>
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-krudex-accent text-[10px] font-black text-krudex-black">AI</span>
        <p className="text-[12px] font-semibold text-white">Knowledge assistant</p>
        <span className="ml-auto rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">Live</span>
      </div>
      <div className="mt-3 flex justify-end">
        <p className="max-w-[78%] rounded-2xl rounded-br-md bg-white/10 px-3 py-2 text-[12px] text-white">What is our refund window for annual plans?</p>
      </div>
      <div className="mt-3 max-w-[88%] rounded-2xl rounded-bl-md border border-krudex-accent/25 bg-krudex-accent/[0.07] px-3 py-2.5">
        <p className="text-[12px] leading-relaxed text-white/90">Annual plans can be refunded within 30 days of purchase, pro-rated after the first month.</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {['billing-policy.pdf', 'terms-v4.docx'].map((s) => (
            <span key={s} className="rounded-md bg-white/[0.07] px-2 py-0.5 text-[9.5px] text-white/60">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2">
        {line('55%')}
        <span className="ml-auto h-5 w-5 rounded-full bg-krudex-accent" />
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className={`${panel} relative w-full max-w-[460px] p-4`}>
      <div className="flex items-center gap-2">
        {['#F2DFB8', '#D4B483', '#8F6C3C', '#0A0908', '#F5EFE4'].map((c) => (
          <span key={c} className="h-6 w-6 rounded-full border border-white/15" style={{ background: c }} />
        ))}
        <span className="ml-auto text-[10px] font-semibold text-white/45">Design system · v2</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-3">
        <div className="col-span-3 rounded-xl border border-dashed border-krudex-accent/50 bg-white/[0.03] p-3">
          <p className="text-[18px] font-extrabold leading-none tracking-tight text-white">Aa</p>
          <p className="mt-1 text-[9px] text-white/45">Plus Jakarta Sans · 800</p>
          <div className="mt-3 flex gap-2">
            <span className="rounded-full bg-krudex-accent px-3 py-1 text-[10px] font-bold text-krudex-black">Primary</span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold text-white">Secondary</span>
          </div>
        </div>
        <div className="col-span-2 space-y-2 rounded-xl bg-white/[0.04] p-3">
          {line('90%', 'bg-white/20')}
          {line('70%')}
          {line('80%')}
          <span className="mt-1 block h-8 rounded-lg bg-white/[0.07]" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-14 rounded-lg bg-white/[0.04] p-2">
            <span className="block h-full rounded-md bg-gradient-to-br from-white/10 to-transparent" />
          </div>
        ))}
      </div>
      {/* Cursor */}
      <svg viewBox="0 0 24 24" className="absolute right-10 top-24 h-5 w-5 drop-shadow" fill="#D4B483">
        <path d="M4 2l16 9-7 2-3 7z" />
      </svg>
    </div>
  );
}

function Marketing() {
  return (
    <div className={`${panel} w-full max-w-[460px] p-4`}>
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold text-white">Search campaign · Leads</p>
        <span className="rounded-full bg-krudex-accent/15 px-2 py-0.5 text-[9.5px] font-semibold text-krudex-accent">Last 30 days</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          ['Clicks', '8,214'],
          ['Conv. rate', '6.8%'],
          ['Cost / lead', '−24%'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/[0.05] p-2.5">
            <p className="text-[9px] uppercase tracking-wider text-white/45">{k}</p>
            <p className="mt-1 text-sm font-bold text-white">{v}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 100" className="mt-3 h-28 w-full rounded-xl bg-white/[0.03]" preserveAspectRatio="none">
        <defs>
          <linearGradient id="mk-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#D4B483" stopOpacity="0.35" />
            <stop offset="1" stopColor="#D4B483" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 82 L30 76 L60 79 L90 64 L120 66 L150 52 L180 55 L210 40 L240 34 L270 24 L300 16 L300 100 L0 100Z" fill="url(#mk-fill)" />
        <path d="M0 82 L30 76 L60 79 L90 64 L120 66 L150 52 L180 55 L210 40 L240 34 L270 24 L300 16" fill="none" stroke="#D4B483" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {['Google Ads', 'Meta', 'SEO', 'GA4'].map((c) => (
          <span key={c} className="rounded-md bg-white/[0.07] px-2 py-0.5 text-[10px] text-white/65">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function Training() {
  const modules = ['Planning a product', 'Building the web app', 'Adding AI features', 'Launching with ads'];
  return (
    <div className={`${panel} w-full max-w-[420px] p-4`}>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-krudex-accent">Cohort track</p>
      <p className="mt-1 text-[15px] font-bold text-white">From idea to launched product</p>
      <div className="mt-3 h-1.5 rounded-full bg-white/10">
        <div className="h-full w-[55%] rounded-full bg-krudex-accent" />
      </div>
      <ul className="mt-4 space-y-2">
        {modules.map((m, i) => (
          <li key={m} className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                i < 2 ? 'bg-krudex-accent text-krudex-black' : 'border border-white/20 text-white/50'
              }`}
            >
              {i < 2 ? '✓' : i + 1}
            </span>
            <span className={`text-[12px] ${i < 2 ? 'text-white/55 line-through decoration-white/25' : 'text-white'}`}>{m}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const MOCKS: Record<MockKind, () => React.JSX.Element> = {
  saas: Saas,
  mobile: Mobile,
  ai: Ai,
  design: Design,
  marketing: Marketing,
  training: Training,
};

/** Warm backdrops, one per offering, all inside the black/gold palette. */
const BACKDROPS: Record<MockKind, string> = {
  saas: 'radial-gradient(120% 90% at 0% 0%, #3A2C18 0%, #17130E 55%, #0D0B09 100%)',
  mobile: 'radial-gradient(120% 90% at 100% 0%, #43301A 0%, #1A1510 55%, #0D0B09 100%)',
  ai: 'radial-gradient(110% 90% at 50% 0%, #2F2617 0%, #16120D 55%, #0D0B09 100%)',
  design: 'radial-gradient(120% 90% at 0% 100%, #3F2E1B 0%, #17130E 55%, #0D0B09 100%)',
  marketing: 'radial-gradient(120% 90% at 100% 100%, #3B2D19 0%, #17130E 55%, #0D0B09 100%)',
  training: 'radial-gradient(120% 90% at 50% 100%, #3A2C18 0%, #17130E 55%, #0D0B09 100%)',
};

export default function ProductMock({
  kind,
  num,
  tags = [],
  className = '',
}: {
  kind: MockKind;
  num?: string;
  tags?: readonly string[];
  className?: string;
}) {
  const Mock = MOCKS[kind];
  return (
    <div
      aria-hidden="true"
      className={`relative flex min-h-[320px] min-w-0 items-center justify-center overflow-hidden px-5 pb-20 pt-14 sm:min-h-[400px] sm:px-8 ${className}`}
      style={{ background: BACKDROPS[kind] }}
    >
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      {num && (
        <span className="kx-outline-num pointer-events-none absolute left-5 top-3 text-[72px] font-extrabold leading-none sm:text-[96px]">
          {num}
        </span>
      )}
      <div className="relative flex w-full min-w-0 justify-center">
        <Mock />
      </div>
      {tags.length > 0 && (
        <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="border border-white/15 bg-krudex-black/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/80">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
