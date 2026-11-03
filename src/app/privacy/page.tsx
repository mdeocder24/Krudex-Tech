import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Krudex Technologies collects, uses, and protects the information you share through this website.',
  alternates: { canonical: '/privacy' },
};

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="LEGAL"
      title="Privacy Policy"
      updated="3 November 2026"
      intro={
        <p>
          Krudex Technologies (&ldquo;Krudex&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is based in Hyderabad,
          Telangana, India. This policy explains what personal data we collect through this website, why, and the
          choices you have. It is written to meet our obligations under India&apos;s Digital Personal Data Protection
          Act, 2023 and, where it applies to you, the EU/UK GDPR.
        </p>
      }
      sections={[
        {
          heading: 'What we collect',
          body: (
            <>
              <p>
                <strong>Information you give us.</strong> When you send an inquiry through our{' '}
                <Link href="/contact">contact form</Link>, we collect your name, email address, and, if you choose to
                provide them, your company or college, the services you are interested in, your timeline, and any
                details you write in the message.
              </p>
              <p>
                <strong>Information sent automatically.</strong> Like any website, our hosting provider receives your
                IP address and basic request data (browser type, the page requested, time). We use IP addresses only
                to limit abuse of the contact form and do not store them with your inquiry.
              </p>
              <p>
                <strong>Spam protection.</strong> The contact form may use Cloudflare Turnstile to check that a person,
                not a bot, is submitting it. Turnstile processes limited browser and device signals for this purpose
                under{' '}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                  Cloudflare&apos;s privacy policy
                </a>
                .
              </p>
              <p>
                We do not use advertising cookies or sell your personal data. This website does not set cookies of its
                own.
              </p>
            </>
          ),
        },
        {
          heading: 'How we use it',
          body: (
            <ul>
              <li>To read and reply to your inquiry, and to follow up about the project or training you asked about.</li>
              <li>To prepare a proposal, statement of work, or training details if you ask for one.</li>
              <li>To protect the website and form from spam and abuse.</li>
            </ul>
          ),
        },
        {
          heading: 'Legal basis',
          body: (
            <p>
              We process inquiry data because you asked us to respond (your consent and steps taken at your request
              before entering into a contract), and we process limited technical data for our legitimate interest in
              keeping the website secure.
            </p>
          ),
        },
        {
          heading: 'Who we share it with',
          body: (
            <>
              <p>We share personal data only with service providers that help us run this website:</p>
              <ul>
                <li>
                  <strong>Cloudflare</strong> stores inquiry records (Cloudflare D1 database) and provides spam
                  protection.
                </li>
                <li>
                  <strong>Our email provider</strong> delivers a copy of your inquiry to our team&apos;s inbox.
                </li>
                <li>
                  <strong>Our hosting provider</strong> serves the website.
                </li>
              </ul>
              <p>
                These providers may process data outside India. We do not share your data with anyone else unless the
                law requires it.
              </p>
            </>
          ),
        },
        {
          heading: 'How long we keep it',
          body: (
            <p>
              We keep inquiry records for up to 24 months after our last contact with you, then delete them. If you
              become a client, we keep records needed for the engagement and for tax and legal purposes for as long as
              the law requires.
            </p>
          ),
        },
        {
          heading: 'Your rights',
          body: (
            <>
              <p>
                You can ask us to access, correct, or delete the personal data we hold about you, or withdraw your
                consent at any time. Email {mail} and we will respond within 30 days.
              </p>
              <p>
                If you are unhappy with our response, you may complain to the Data Protection Board of India or, if you
                are in the EU/UK, your local data protection authority.
              </p>
            </>
          ),
        },
        {
          heading: 'Security',
          body: (
            <p>
              Inquiries travel over HTTPS and are stored in an access-controlled database. Only team members who need
              to respond to inquiries can read them. No method of transmission or storage is completely secure, but we
              take reasonable steps to protect your data.
            </p>
          ),
        },
        {
          heading: 'Changes and contact',
          body: (
            <p>
              We may update this policy and will change the date at the top when we do. For any privacy question,
              contact our grievance officer at {mail}.
            </p>
          ),
        },
      ]}
    />
  );
}
