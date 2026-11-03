import { ASSURANCES, OFFERINGS, PROCESS, STATS, TRAINING, WORK } from '@/content/offerings';
import { faqs } from '@/lib/faqs';
import { CONTACT_EMAIL, PHONES, SITE_URL } from '@/lib/site';

/**
 * Everything the AI features may say about Krudex, built from the same content
 * the website shows. The assistant answers only from this text, so updating
 * the site content updates the assistant.
 *
 * Deterministic output (no dates, no random order) keeps it prompt-cacheable.
 */
export function buildKnowledge(): string {
  const services = OFFERINGS.map(
    (o) =>
      `### ${o.num}. ${o.title} (id: ${o.id})\n${o.tagline}\n${o.description}\nCapabilities:\n${o.capabilities
        .map((c) => `- ${c}`)
        .join('\n')}\nOutcome: ${o.outcome}\nPage: ${SITE_URL}${o.href}`
  ).join('\n\n');

  const training = [
    `${TRAINING.title}: ${TRAINING.summary}`,
    'Topics:',
    ...TRAINING.topics.map((t) => `- ${t.title}: ${t.text}`),
    'Why train with Krudex:',
    ...TRAINING.reasons.map((r) => `- ${r.title}: ${r.text}`),
    'How to start:',
    ...TRAINING.steps.map((s, i) => `${i + 1}. ${s}`),
    `Enquire: ${SITE_URL}/contact?interest=training`,
  ].join('\n');

  const process = PROCESS.map((p) => `${p.num}. ${p.phase} - ${p.title}: ${p.text}`).join('\n');

  return `# Krudex Global - company knowledge

Krudex Global is an incorporated engineering firm in Hyderabad, Telangana, India, working with clients worldwide. It builds SaaS products, mobile apps and AI features, runs Google Ads and digital marketing, and trains students with industry experts in collaboration with NovaSkill Hub.

## Services
${services}

## Student training
${training}

## How we work
${process}

Commitments:
${ASSURANCES.map((a) => `- ${a}`).join('\n')}

## In numbers
${STATS.map((s) => `- ${s.value} ${s.label}`).join('\n')}

## Selected work
${WORK.map((w) => `- ${w.name} (${w.year}, ${w.kind}): ${w.text}`).join('\n')}

## FAQ
${faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join('\n\n')}

## Contact
- Contact form: ${SITE_URL}/contact
- Email: ${CONTACT_EMAIL}
- Phone / WhatsApp: ${PHONES.join(', ')}
- Reply time: within one business day
`;
}

/** Service ids the scoper may suggest, matching the contact form options. */
export const CONTACT_SERVICE_OPTIONS = [
  'Web platform',
  'Mobile app',
  'AI integration',
  'UI/UX design',
  'Google Ads',
  'Digital marketing',
  'Student training',
] as const;
