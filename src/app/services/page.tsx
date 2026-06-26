"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ServicesCTA from '@/components/ServicesCTA';
import Footer from '@/components/Footer';

const servicesData = [
  {
    num: "01",
    title: "Full-Stack Web Platforms",
    subtitle: "From zero to production-grade \u2014 engineered to last.",
    desc: "We design and build high-throughput web applications with clean architecture. Our process begins with a technical audit of your requirements, moves through system design, and ends with a fully deployed, monitored, and documented product. We don't deliver code \u2014 we deliver working systems.",
    outcome: "Sub-1s Largest Contentful Paint guaranteed on every project.",
    capabilities: [
      "Next.js 16 App Router with React Server Components",
      "FastAPI / Node.js backends with typed contracts",
      "PostgreSQL database design and query optimization",
      "Redis caching for sub-millisecond reads",
      "CI/CD pipelines with automated testing gates",
      "Docker containerization and AWS/Vercel deployment"
    ]
  },
  {
    num: "02",
    title: "Mobile Applications",
    subtitle: "One codebase. Native performance on both platforms.",
    desc: "We build cross-platform mobile applications that behave like native apps \u2014 not compromises. React Native with Expo lets us ship to iOS and Android from a single, maintainable codebase while preserving access to native device APIs, smooth 60fps animations, and offline capability.",
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
    subtitle: "Intelligent features that work in production \u2014 not just demos.",
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
    desc: "We build design systems from component primitives up \u2014 not templates down. Every interface we design is grounded in user research and business goals, then executed in Figma with full specification and handed off to engineering with working prototypes. Our branding work covers identity, collateral, and digital campaigns.",
    outcome: "40+ brand identities delivered across startups, enterprises, and events.",
    capabilities: [
      "User research, flows, and wireframes",
      "High-fidelity Figma prototypes",
      "Component library with Tailwind CSS v4",
      "Corporate identity and logo design",
      "Event campaign design (TEDx, conferences)",
      "Investor-ready pitch deck design"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-krudex-black selection:bg-krudex-green selection:text-krudex-black flex flex-col">
      <Navbar />
      
      <section className="px-8 md:px-16 lg:px-24 pt-48 pb-32 bg-krudex-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
              SERVICES
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-32"
          >
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-8 leading-[1.1] tracking-tight">
              What Krudex <br />
              <span className="text-krudex-green">builds for you.</span>
            </h1>
            <p className="text-krudex-muted text-lg leading-relaxed max-w-2xl">
              Four core disciplines. Senior engineers on every project. <br className="hidden md:block" />
              Measurable outcomes as the only deliverable that counts.
            </p>
          </motion.div>

          <div className="flex flex-col gap-32">
            {servicesData.map((service, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Column: Description */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col"
                >
                  <div className="text-krudex-green font-mono text-sm mb-6 border-b border-krudex-border/50 pb-4 inline-block w-full">{service.num}</div>
                  <h2 className="font-serif text-4xl text-white font-bold mb-4">{service.title}</h2>
                  <h3 className="text-krudex-green font-semibold mb-6">{service.subtitle}</h3>
                  <p className="text-krudex-muted text-base leading-loose mb-10">
                    {service.desc}
                  </p>
                  <div className="border-l-2 border-krudex-green pl-6 py-2 bg-gradient-to-r from-krudex-green/5 to-transparent">
                    <div className="text-[10px] text-krudex-green font-mono uppercase tracking-[0.15em] mb-2">
                      OUTCOME
                    </div>
                    <p className="text-white font-medium text-sm">
                      {service.outcome}
                    </p>
                  </div>
                </motion.div>

                {/* Right Column: Capabilities */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-col pt-12"
                >
                  <div className="text-[10px] text-krudex-green font-mono uppercase tracking-[0.2em] mb-6">
                    CAPABILITIES
                  </div>
                  <div className="flex flex-col gap-2">
                    {service.capabilities.map((cap, capIdx) => (
                      <div 
                        key={capIdx} 
                        className="bg-krudex-card/50 border border-krudex-border/50 p-5 flex items-center gap-4 hover:border-krudex-green/30 transition-colors"
                      >
                        <span className="text-krudex-green font-mono text-xs opacity-70">
                          {String(capIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-krudex-text text-sm">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesCTA />
      <Footer />
    </main>
  );
}
