"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServicesCTA from '@/components/ServicesCTA';
import Footer from '@/components/Footer';

const servicesData = [
  {
    num: "01",
    title: "SaaS & Web Platforms",
    subtitle: "From zero to production-grade — engineered to last.",
    image: "/images/saas-platform.webp",
    desc: "We design and build high-throughput web applications with clean architecture. Our process begins with a technical audit of your requirements, moves through system design, and ends with a fully deployed, monitored, and documented product. We don't deliver code — we deliver working systems.",
    outcome: "Sub-1s Largest Contentful Paint guaranteed on every project.",
    capabilities: [
      "Next.js 16 App Router with production-grade monitoring gates",
      "FastAPI / Node.js backends with strongly-typed API contracts",
      "PostgreSQL database design with query optimization and connection pooling",
      "Redis caching layer for sub-millisecond read times",
      "CI/CD pipelines with automated vulnerability testing gates",
      "Docker containerization with secure AWS/Vercel serverless deployment"
    ]
  },
  {
    num: "02",
    title: "Mobile Applications",
    subtitle: "One codebase. Native performance on both platforms.",
    image: "/images/mobile-app.webp",
    desc: "We build cross-platform mobile applications that behave like native apps — not compromises. React Native with Expo lets us ship to iOS and Android from a single, maintainable codebase while preserving access to native device APIs, smooth 60fps animations, and offline capability.",
    outcome: "Single codebase delivering native experience across iOS and Android.",
    capabilities: [
      "React Native with Expo managed and bare workflows",
      "Native module integration (camera, biometrics, GPS)",
      "Offline-first architecture with background sync",
      "Push notifications and deep linking",
      "App Store and Google Play submission",
      "Over-the-air updates with Expo EAS"
    ]
  },
  {
    num: "03",
    title: "AI & ML Integration",
    subtitle: "Intelligent features that work in production — not just demos.",
    image: "/images/ai-architecture.webp",
    desc: "We embed AI and machine learning into real products. That means building inference pipelines optimized for latency, training custom models on your domain data, and integrating LLM-powered features that behave predictably under load. We've shipped computer vision, NLP, and recommendation systems into production.",
    outcome: "18ms average inference latency. 94.7% accuracy on our vision projects.",
    capabilities: [
      "Custom model training with TensorFlow and PyTorch",
      "Real-time computer vision with MediaPipe",
      "In-browser inference with TensorFlow.js and WebGL",
      "LLM integration with OpenAI API and LangChain",
      "RAG pipelines for document-aware AI features",
      "ML model monitoring and retraining pipelines"
    ]
  },
  {
    num: "04",
    title: "UI/UX & Brand Design",
    subtitle: "Design systems that scale. Identities that command credibility.",
    image: "/images/dark-texture.webp",
    desc: "We build design systems from component primitives up — not templates down. Every interface we design is grounded in user research and business goals, then executed in Figma with full specification and handed off to engineering with working prototypes. Our branding work covers identity, collateral, and digital campaigns.",
    outcome: "40+ brand identities delivered across startups, enterprises, and events.",
    capabilities: [
      "User research, flows, and wireframes",
      "High-fidelity Figma prototypes",
      "Component library with Tailwind CSS v4",
      "Corporate identity and logo design",
      "Event campaign design (TEDx, conferences)",
      "Investor-ready pitch deck design"
    ]
  },
  {
    num: "05",
    id: "digital-marketing",
    title: "Google Ads & Digital Marketing",
    subtitle: "Growth that compounds. Every rupee tracked to revenue.",
    image: "/images/growth-marketing.webp",
    desc: "We take the product we build to market. Our marketing work starts with analytics and positioning, then runs search, paid, social, and content channels as one system — measured against pipeline and revenue, not vanity metrics. Because we build the product too, landing pages, tracking, and experiments ship without a handoff.",
    outcome: "One team from product build to customer acquisition, with full-funnel reporting.",
    capabilities: [
      "Google Ads and Meta performance campaigns",
      "Technical and content SEO with keyword strategy",
      "Social media strategy and content production",
      "Conversion-optimized landing pages and A/B testing",
      "Email marketing and lifecycle automation",
      "GA4 analytics, conversion tracking, and reporting dashboards"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-accent selection:text-white flex flex-col">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24 md:pb-32 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-krudex-border px-3.5 py-1.5 mb-10 rounded-full bg-krudex-surface/60"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_8px_#E52B3B]"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold font-mono">
                OUR SERVICES
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-20 md:mb-28 flex flex-col items-center"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 leading-[1.08] tracking-tight">
                What Krudex <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-krudex-muted">
                  builds and grows for you.
                </span>
              </h1>
              <p className="text-krudex-muted text-lg leading-relaxed max-w-2xl text-center">
                Five core disciplines. Senior engineers on every project. <br className="hidden md:block" />
                Measurable business outcomes as the primary deliverable that counts.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {servicesData.map((service, idx) => (
              <div key={idx} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 scroll-mt-32 items-start">
                {/* Left Column: Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >
                  <div className="text-krudex-accent font-mono text-sm font-semibold mb-6 border-b border-krudex-border pb-4 flex items-center justify-between">
                    <span>{service.num} // VERTICAL</span>
                    <span className="w-2 h-2 rounded-full bg-krudex-accent shadow-[0_0_8px_#E52B3B]" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold mb-4">{service.title}</h2>
                  <h3 className="text-white/80 font-medium text-lg mb-6">{service.subtitle}</h3>
                  <p className="text-krudex-muted text-base leading-relaxed mb-10">
                    {service.desc}
                  </p>
                  <div className="border-l-2 border-krudex-accent pl-6 py-4 bg-krudex-accent/5 rounded-r-xl border border-r-0 border-t-0 border-b-0">
                    <div className="text-xs text-krudex-accent font-mono uppercase tracking-[0.15em] mb-2 font-semibold">
                      PERFORMANCE GUARANTEE
                    </div>
                    <p className="text-white font-medium text-sm">
                      {service.outcome}
                    </p>
                  </div>
                </motion.div>

                {/* Right Column: Visual Preview & Capabilities */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col"
                >
                  {/* Visual Header Banner */}
                  <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 border border-krudex-border/80 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover brightness-85 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-krudex-black via-krudex-black/30 to-transparent" />
                  </div>

                  <div className="text-xs text-krudex-muted font-mono uppercase tracking-[0.2em] mb-4 font-semibold">
                    CAPABILITIES & STACK
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {service.capabilities.map((cap, capIdx) => (
                      <div
                        key={capIdx}
                        className="group bg-krudex-card/70 border border-krudex-border rounded-xl p-4 sm:p-5 flex items-center gap-4 hover:border-krudex-accent/50 hover:bg-krudex-card transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                      >
                        <span className="text-krudex-accent font-mono text-xs font-semibold px-2 py-0.5 rounded bg-krudex-accent/10 border border-krudex-accent/20">
                          {String(capIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-white/90 text-sm group-hover:text-white transition-colors">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Student Banner */}
          <div className="mt-24 md:mt-32 rounded-2xl border border-krudex-border/80 bg-krudex-card/70 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-krudex-accent/10 border border-krudex-accent/20 text-krudex-accent text-xs font-mono uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NovaSkill Hub Collaboration</span>
              </div>
              <h2 className="text-white font-bold text-2xl mb-2">Are you an engineering student?</h2>
              <p className="text-krudex-muted text-sm leading-relaxed max-w-xl">
                We train students with industry practitioners. Get real project experience in modern web platforms and marketing.
              </p>
            </div>
            <Link
              href="/training"
              className="group inline-flex items-center gap-2.5 self-start md:self-auto whitespace-nowrap bg-krudex-accent text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-krudex-accent-hover shadow-[0_0_25px_rgba(229,43,59,0.35)] transition-all duration-300"
            >
              <span>See Student Training</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesCTA />
      <Footer />
    </main>
  );
}
