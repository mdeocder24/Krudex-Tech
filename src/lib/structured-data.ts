import { CONTACT_EMAIL, PHONES, SITE_NAME, SITE_URL } from './site';
import { BRAND } from '@/components/brand/brand';
import { faqs } from './faqs';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${BRAND.markSmallSrc}`,
  email: CONTACT_EMAIL,
  telephone: PHONES[0],
  description:
    'Krudex Global builds SaaS products, runs Google Ads and digital marketing, and trains students with industry experts in collaboration with NovaSkill Hub.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  contactPoint: PHONES.map((telephone) => ({
    '@type': 'ContactPoint',
    telephone,
    email: CONTACT_EMAIL,
    contactType: 'sales',
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      'SaaS & web platforms',
      'Mobile apps',
      'AI integration',
      'UI/UX design',
      'Google Ads',
      'Digital marketing',
      'Student training',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};
