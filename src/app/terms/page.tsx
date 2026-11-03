import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that apply when you use the Krudex Global website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Terms of Use"
      updated="3 November 2026"
      intro={
        <p>
          These terms apply to your use of this website, operated by Krudex Global, Hyderabad, Telangana, India.
          By using the site you agree to them. Client projects and training programmes are governed by their own
          written agreements, which take precedence over these terms.
        </p>
      }
      sections={[
        {
          heading: 'Use of the website',
          body: (
            <>
              <p>You may browse the site and contact us for legitimate business or training inquiries. You must not:</p>
              <ul>
                <li>send spam, automated, or misleading submissions through the contact form;</li>
                <li>try to gain unauthorised access to the site, its servers, or its data;</li>
                <li>interfere with the site&apos;s operation or security.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Content and intellectual property',
          body: (
            <p>
              The Krudex name, logo, text, graphics, and code on this website belong to Krudex Global or its
              licensors. You may not copy or reuse them for commercial purposes without written permission. Ownership
              of work we build for clients is set out in each client agreement.
            </p>
          ),
        },
        {
          heading: 'Information on this site',
          body: (
            <p>
              We describe our services in good faith, but the content on this site is general information, not a
              binding offer. Scope, timelines, fees, and deliverables are agreed in writing for each engagement or
              training programme.
            </p>
          ),
        },
        {
          heading: 'Third-party links',
          body: (
            <p>
              The site may link to other websites, including our training partner NovaSkill Hub. We are not
              responsible for the content or practices of sites we do not control.
            </p>
          ),
        },
        {
          heading: 'Liability',
          body: (
            <p>
              The website is provided &ldquo;as is&rdquo;. To the extent the law allows, Krudex is not liable for any
              indirect or consequential loss arising from your use of the website. Nothing in these terms limits
              liability that cannot be limited by law.
            </p>
          ),
        },
        {
          heading: 'Privacy',
          body: (
            <p>
              How we handle personal data is explained in our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          ),
        },
        {
          heading: 'Governing law and contact',
          body: (
            <p>
              These terms are governed by the laws of India, and the courts of Hyderabad, Telangana have jurisdiction.
              Questions about these terms can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
