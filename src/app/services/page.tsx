"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ServicesCTA from '@/components/ServicesCTA';
import Footer from '@/components/Footer';

const servicesData = [
  {
    num: "01",
    id: "saas-platforms",
    badge: "CORE ENGINE",
    badgeColor: "status-pill-blue",
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
    id: "mobile-apps",
    badge: "MOBILE DEV",
    badgeColor: "status-pill-purple",
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
    id: "ai-ml",
    badge: "INTELLIGENCE",
    badgeColor: "status-pill-pink",
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
    id: "design-systems",
    badge: "DESIGN CRAFT",
    badgeColor: "status-pill-orange",
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
    badge: "GROWTH FUNNELS",
    badgeColor: "status-pill-green",
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
    <main className="min-h-screen bg-transparent selection:bg-[#7B68EE]/30 selection:text-white flex flex-col">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 md:pb-28 relative z-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#7B68EE]/20 via-[#00D2FF]/15 to-[#E01E5A]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF]/30 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="text-xs uppercase tracking-wider text-[#00D2FF] font-semibold font-mono">
                COMPREHENSIVE CAPABILITIES
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-16 md:mb-24 flex flex-col items-center"
            >
              <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white mb-6 leading-[1.08] tracking-tight">
                What Krudex <br />
                <span className="clickup-gradient-text">
                  builds and grows for you.
                </span>
              </h1>
              <p className="text-krudex-muted text-base sm:text-lg leading-relaxed max-w-2xl text-center">
                Five core disciplines. Senior engineers on every project. <br className="hidden md:block" />
                Measurable business outcomes as the primary deliverable that counts.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-20 md:gap-28">
            {servicesData.map((service, idx) => (
              <div key={idx} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 scroll-mt-32 items-start">
                {/* Left Column: Description */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-6">
                    <span className="text-xs font-mono font-bold text-[#A78BFA] uppercase tracking-wider">
                      PHASE {service.num} {"//"} MODULE
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mb-3 tracking-tight">
                    {service.title}
                  </h2>
                  <h3 className="text-white/80 font-medium text-base mb-6">{service.subtitle}</h3>
                  <p className="text-krudex-muted text-sm sm:text-base leading-relaxed mb-8">
                    {service.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#7B68EE]/10 via-[#00D2FF]/5 to-transparent border border-[#7B68EE]/30">
                    <div className="text-[10px] text-[#A78BFA] font-mono uppercase tracking-widest mb-1.5 font-bold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>PERFORMANCE GUARANTEE</span>
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
                  <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover brightness-85 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09070F] via-transparent to-transparent" />
                  </div>

                  <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-3 font-semibold">
                    CAPABILITIES &amp; STACK
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {service.capabilities.map((cap, capIdx) => (
                      <div
                        key={capIdx}
                        className="clickup-card p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-[#7B68EE]/40 transition-all duration-200 group"
                      >
                        <span className="text-[#A78BFA] font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#7B68EE]/15 border border-[#7B68EE]/30 shrink-0">
                          {String(capIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-white/90 text-xs sm:text-sm group-hover:text-white transition-colors">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Student Banner */}
          <div className="mt-20 md:mt-28 clickup-card p-8 md:p-12 border border-[#7B68EE]/30 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E01E5A]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E01E5A]/10 border border-[#E01E5A]/30 text-[#F472B6] text-xs font-mono uppercase mb-3 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NovaSkill Hub Collaboration</span>
              </div>
              <h2 className="text-white font-heading font-black text-2xl sm:text-3xl mb-2 tracking-tight">Are you an engineering student?</h2>
              <p className="text-krudex-muted text-sm leading-relaxed max-w-xl">
                We train students with industry practitioners. Get real project experience in modern web platforms and marketing.
              </p>
            </div>
            <Link
              href="/training"
              className="clickup-btn-primary px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 self-start md:self-auto shrink-0 relative z-10 group/btn"
            >
              <span>See Student Training</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <ServicesCTA />
      <Footer />
    </main>
  );
}
