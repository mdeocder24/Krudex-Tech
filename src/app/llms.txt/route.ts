import { ASSURANCES, OFFERINGS, PROCESS, TRAINING } from '@/content/offerings';
import { PROGRAMS } from '@/content/training';
import { faqs } from '@/lib/faqs';
import { CONTACT_EMAIL, PHONE_DISPLAY, SITE_NAME, SITE_URL, WHATSAPP_URL } from '@/lib/site';

// Prerendered at build time, like sitemap.xml and robots.txt.
export const dynamic = 'force-static';

/**
 * /llms.txt: a plain Markdown summary of the company for AI assistants and
 * answer engines (https://llmstxt.org). It is built from the same content
 * modules as the pages, so it cannot drift from what the site says.
 */
function buildLlmsTxt(): string {
  const url = (path: string) => `${SITE_URL}${path}`;

  const services = OFFERINGS.map(
    (o) =>
      `### ${o.title}\n\n` +
      `${o.description}\n\n` +
      `${o.capabilities.map((c) => `- ${c}`).join('\n')}\n\n` +
      `Outcome: ${o.outcome}\n\n` +
      `Details: ${url(o.href)}`
  ).join('\n\n');

  const programs = PROGRAMS.map(
    (p) =>
      `### ${p.title}\n\n` +
      `${p.description}\n\n` +
      `- Who it is for: ${p.forWho}\n` +
      `- Modules: ${p.modules.map((m) => m.title).join('; ')}\n` +
      `- Stack: ${p.stack.join(', ')}\n` +
      `- Capstone project: ${p.capstone}\n\n` +
      `Details: ${url(`/training#program-${p.id}`)}`
  ).join('\n\n');

  return `# ${SITE_NAME}

> ${SITE_NAME} is an engineering firm in Hyderabad, Telangana, India. It builds SaaS products, web platforms and mobile apps, integrates AI and machine learning, designs interfaces and brands, runs Google Ads and digital marketing, and trains students with industry experts in collaboration with NovaSkill Hub. It works with clients worldwide.

Key facts:

- Company: ${SITE_NAME}
- Location: Hyderabad, Telangana, India. Serves clients worldwide.
- Services: ${OFFERINGS.map((o) => o.title).join(', ')}, ${TRAINING.title}
- Website: ${SITE_URL}
- Email: ${CONTACT_EMAIL}
- Phone and WhatsApp: ${PHONE_DISPLAY}
- Commitments: ${ASSURANCES.join('; ')}

## Pages

- [Home](${url('/')}): Overview of what ${SITE_NAME} builds and how it works
- [Services](${url('/services')}): Full detail on each service, with capabilities and outcomes
- [Student training](${url('/training')}): Programs, modules, tech stack and capstone projects
- [About](${url('/about')}): Company background, vision and principles
- [Our team](${url('/our-team')}): The people who scope and build each project
- [Contact](${url('/contact')}): Project inquiries, training enquiries and frequently asked questions

## Services

${services}

## Student training

${TRAINING.summary}

${programs}

How to enrol:

${TRAINING.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## How an engagement works

${PROCESS.map((p, i) => `${i + 1}. ${p.phase} (${p.title}): ${p.text}`).join('\n')}

## Frequently asked questions

${faqs.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}

## Contact

- Inquiry form: ${url('/contact')}
- Email: ${CONTACT_EMAIL}
- Phone: ${PHONE_DISPLAY}
- WhatsApp: ${WHATSAPP_URL}

Every inquiry gets a reply within one business day. New projects start with a free 30-minute scoping call.

## Optional

- [Privacy policy](${url('/privacy')}): How inquiry data is handled
- [Terms of use](${url('/terms')}): Terms for using the website
`;
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
