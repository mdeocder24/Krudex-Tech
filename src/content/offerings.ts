/**
 * What Krudex offers, in one place. The homepage, /services and the footer
 * all read from here, so an offering is described the same way everywhere.
 */

export type MockKind = 'saas' | 'mobile' | 'ai' | 'design' | 'marketing' | 'training';

export interface Offering {
  id: string;
  num: string;
  title: string;
  /** One line under the title. */
  tagline: string;
  /** Short pitch for cards. */
  summary: string;
  /** Long description for /services. */
  description: string;
  /** Three benefits shown on cards. */
  highlights: [string, string, string];
  /** Chips on the visual. */
  tags: string[];
  /** Full capability list for /services. */
  capabilities: string[];
  outcome: string;
  /** Button label on cards. */
  cta: string;
  mock: MockKind;
  href: string;
}

export const OFFERINGS: Offering[] = [
  {
    id: 'saas-web',
    num: '01',
    title: 'SaaS & Web Platforms',
    tagline: 'From zero to production-grade, engineered to last.',
    summary: 'SaaS products, customer portals and web apps, built to scale with your user base.',
    description:
      'We design and build high-throughput web applications with clean architecture. Every build starts with a technical audit of your requirements, moves through system design, and ends with a deployed, monitored and documented product. We deliver working systems, not just code.',
    highlights: [
      'Multi-tenant SaaS, dashboards, portals and internal tools',
      'Typed APIs, PostgreSQL, caching and CI/CD from day one',
      'Fast by default: sub-1s Largest Contentful Paint on every project',
    ],
    tags: ['SaaS', 'Web Apps', 'Dashboards'],
    capabilities: [
      'Next.js App Router frontends with production monitoring',
      'FastAPI / Node.js backends with strongly typed API contracts',
      'PostgreSQL schema design, query optimisation and connection pooling',
      'Redis caching for sub-millisecond reads',
      'CI/CD pipelines with automated vulnerability checks',
      'Docker builds deployed securely to AWS or Vercel',
    ],
    outcome: 'Sub-1s Largest Contentful Paint on every project.',
    cta: 'Explore web platforms',
    mock: 'saas',
    href: '/services#saas-web',
  },
  {
    id: 'mobile',
    num: '02',
    title: 'Mobile Applications',
    tagline: 'One codebase. Native performance on both platforms.',
    summary: 'Cross-platform iOS and Android apps designed for speed, native feel and retention.',
    description:
      'We build cross-platform apps that behave like native ones. React Native with Expo lets us ship to iOS and Android from one maintainable codebase while keeping native device APIs, smooth 60fps animation and offline support.',
    highlights: [
      'iOS and Android from a single React Native codebase',
      'Camera, biometrics, GPS, push notifications and deep links',
      'Offline-first sync, store submission and over-the-air updates',
    ],
    tags: ['iOS', 'Android', 'Expo'],
    capabilities: [
      'React Native with Expo, managed and bare workflows',
      'Native modules: camera, biometrics, GPS',
      'Offline-first architecture with background sync',
      'Push notifications and deep linking',
      'App Store and Google Play submission',
      'Over-the-air updates with Expo EAS',
    ],
    outcome: 'One codebase, a native experience on iOS and Android.',
    cta: 'Explore mobile apps',
    mock: 'mobile',
    href: '/services#mobile',
  },
  {
    id: 'ai',
    num: '03',
    title: 'AI & ML Integration',
    tagline: 'Intelligent features that work in production, not just demos.',
    summary: 'LLM features, RAG knowledge bases, computer vision and custom models inside real products.',
    description:
      'We embed AI and machine learning into real products: inference pipelines tuned for latency, custom models trained on your domain data, and LLM features that behave predictably under load. We have shipped computer vision, NLP and recommendation systems into production.',
    highlights: [
      'Assistants and search grounded in your own documents (RAG)',
      'Custom vision and ML models trained on your data',
      'Monitoring and retraining so accuracy holds after launch',
    ],
    tags: ['LLMs', 'RAG', 'Computer Vision'],
    capabilities: [
      'Custom model training with TensorFlow and PyTorch',
      'Real-time computer vision with MediaPipe',
      'In-browser inference with TensorFlow.js and WebGL',
      'LLM integration with the OpenAI API and LangChain',
      'RAG pipelines for document-aware features',
      'Model monitoring and retraining pipelines',
    ],
    outcome: '18ms average inference latency. 94.7% accuracy on our vision projects.',
    cta: 'Explore AI integration',
    mock: 'ai',
    href: '/services#ai',
  },
  {
    id: 'design',
    num: '04',
    title: 'UI/UX & Brand Design',
    tagline: 'Design systems that scale. Identities that earn trust.',
    summary: 'Research-led product design, design systems and brand identities, handed off ready to build.',
    description:
      'We build design systems from component primitives up. Every interface is grounded in user research and business goals, designed in Figma with full specification, and handed to engineering with working prototypes. Our brand work covers identity, collateral and campaigns.',
    highlights: [
      'User research, flows, wireframes and high-fidelity prototypes',
      'Component libraries that engineering can ship directly',
      'Brand identity, pitch decks and event campaigns',
    ],
    tags: ['Product Design', 'Design Systems', 'Branding'],
    capabilities: [
      'User research, flows and wireframes',
      'High-fidelity Figma prototypes',
      'Component library with Tailwind CSS',
      'Corporate identity and logo design',
      'Event campaign design (TEDx, conferences)',
      'Investor-ready pitch deck design',
    ],
    outcome: '40+ brand identities delivered across startups, enterprises and events.',
    cta: 'Explore design',
    mock: 'design',
    href: '/services#design',
  },
  {
    id: 'digital-marketing',
    num: '05',
    title: 'Google Ads & Digital Marketing',
    tagline: 'Growth that compounds. Every rupee tracked to revenue.',
    summary: 'Google Ads, SEO, social and content, run as one system and measured by leads and revenue.',
    description:
      'We take the product to market. Marketing starts with analytics and positioning, then runs search, paid, social and content as one system, measured against pipeline and revenue rather than vanity metrics. Because we build the product too, landing pages, tracking and experiments ship without a handoff.',
    highlights: [
      'Google Ads and Meta campaigns tuned for qualified leads',
      'Technical and content SEO with a keyword strategy',
      'GA4 conversion tracking and clear monthly reporting',
    ],
    tags: ['Google Ads', 'SEO', 'Social'],
    capabilities: [
      'Google Ads and Meta performance campaigns',
      'Technical and content SEO with keyword strategy',
      'Social media strategy and content production',
      'Conversion-optimised landing pages and A/B testing',
      'Email marketing and lifecycle automation',
      'GA4 analytics, conversion tracking and reporting dashboards',
    ],
    outcome: 'One team from product build to customer acquisition, with full-funnel reporting.',
    cta: 'Explore digital marketing',
    mock: 'marketing',
    href: '/services#digital-marketing',
  },
];

export const TRAINING = {
  id: 'training',
  title: 'Student Training',
  tagline: 'Learn from people who do the work.',
  summary:
    'Practical training led by industry experts, in collaboration with NovaSkill Hub, so students learn how software and digital marketing are done outside the classroom.',
  topics: [
    { title: 'SaaS & web development', text: 'How web products are planned, built and shipped.' },
    { title: 'AI & machine learning', text: 'How AI features are added to real products.' },
    { title: 'UI/UX design', text: 'How research and design shape a product people can use.' },
    { title: 'Google Ads & digital marketing', text: 'How search, ads, social and content bring in customers.' },
  ],
  reasons: [
    { title: 'Taught by industry experts', text: 'You learn from people who work in the field, so the examples and advice come from practice.' },
    { title: 'Backed by working teams', text: 'Krudex builds SaaS products and runs digital marketing, so the training stays close to how the work is done.' },
    { title: 'With NovaSkill Hub', text: 'Krudex and NovaSkill Hub work together to bring this training to students.' },
  ],
  steps: [
    'Send an enquiry and tell us what you want to learn.',
    'We reply within one business day.',
    'We share the current format, dates and fees.',
  ],
  tags: ['Industry experts', 'Hands-on', 'NovaSkill Hub'],
} as const;

export const PROCESS = [
  {
    num: '01',
    phase: 'Discover',
    title: 'Scoping call',
    text: 'A free 30-minute call to understand the product, the users and the constraints.',
    tags: ['Goals', 'Users', 'Constraints'],
  },
  {
    num: '02',
    phase: 'Design',
    title: 'Architecture & SOW',
    text: 'A technical audit, then an architecture document and statement of work, agreed before any code is written.',
    tags: ['Audit', 'Architecture', 'Fixed scope'],
  },
  {
    num: '03',
    phase: 'Build',
    title: 'Senior-led build',
    text: 'The engineers who scoped your product build it, against success criteria we can measure.',
    tags: ['Weekly demos', 'Tested', 'Documented'],
  },
  {
    num: '04',
    phase: 'Scale',
    title: 'Launch & grow',
    text: 'Deployed, monitored and documented, with a 30-day warranty. Then marketing and an optional retainer to keep improving.',
    tags: ['Monitoring', 'Marketing', 'Retainer'],
  },
] as const;

export const ASSURANCES = [
  '100% IP and source code transfer',
  'Reply within one business day',
  '30-day warranty on every build',
  'No lock-in to proprietary frameworks',
] as const;

export const STATS = [
  { value: '4+', label: 'Client engagements' },
  { value: '5', label: 'Core services' },
  { value: '4', label: 'Student training tracks' },
  { value: '30-day', label: 'Post-launch warranty' },
] as const;
