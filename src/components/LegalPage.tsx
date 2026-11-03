import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

/** Shared server-rendered layout for /privacy and /terms. */
export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-svh bg-krudex-black selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
      <Navbar />

      <article className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">{eyebrow}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-[1.05] tracking-tight mb-6">{title}</h1>
          <p className="text-krudex-muted text-sm mb-12">Last updated: {updated}</p>
          <div className="text-white/75 text-base leading-relaxed mb-16 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4">
            {intro}
          </div>

          <div className="flex flex-col gap-12">
            {sections.map((section, i) => (
              <section key={section.heading} aria-labelledby={`legal-${i}`} className="border-t border-krudex-border pt-10">
                <h2 id={`legal-${i}`} className="text-white text-xl font-semibold mb-4">
                  {section.heading}
                </h2>
                <div className="text-krudex-muted text-[15px] leading-relaxed flex flex-col gap-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_strong]:text-white/90 [&_strong]:font-medium">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
