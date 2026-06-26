"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. We overlap our working hours to ensure synchronous communication and use async tools heavily to maintain momentum."
  },
  {
    question: "How does the engagement process work?",
    answer: "It starts with a 30-minute scoping call, followed by a technical audit. We then present a detailed architecture document and statement of work before any code is written."
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer: "Yes. Every project includes a 30-day warranty period, after which we offer structured retainers for ongoing feature development and infrastructure maintenance."
  },
  {
    question: "What's the minimum project size you take on?",
    answer: "We typically engage on projects starting from 4-6 weeks in duration. Our focus is on complex, high-impact systems rather than simple brochure websites."
  },
  {
    question: "Can I see a full contract before committing?",
    answer: "Absolutely. We believe in complete transparency. Our Master Services Agreement (MSA) and standard Statement of Work (SOW) templates are available upon request."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-krudex-black selection:bg-krudex-green selection:text-krudex-black flex flex-col">
      <Navbar />
      
      <section className="px-8 md:px-16 lg:px-24 pt-48 pb-32 bg-krudex-black">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-green"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-semibold">
                  CONTACT
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white">Let's build</span><br />
                <span className="text-krudex-green">something</span><br />
                <span className="text-krudex-green">serious.</span>
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-8 lg:pl-12"
            >
              {/* Contact Item 1 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-krudex-green" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">EMAIL</span>
                  <a href="mailto:krudextechnologies@gmail.com" className="text-white font-medium text-sm hover:text-krudex-green transition-colors">krudextechnologies@gmail.com</a>
                </div>
              </div>
              
              {/* Contact Item 2 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-krudex-green" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">PHONE</span>
                  <a href="tel:+918978261053" className="text-white font-medium text-sm hover:text-krudex-green transition-colors">+91 89782 61053, +91 94902 48160</a>
                </div>
              </div>

              {/* Contact Item 3 */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-krudex-green" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">OFFICE</span>
                  <span className="text-white font-medium text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form and FAQ Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col"
            >
              <h2 className="text-white text-2xl font-bold mb-8">Send an inquiry</h2>
              <div className="bg-krudex-card/30 border border-krudex-border/30 border-t-2 border-t-krudex-green p-8 md:p-12">
                <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">YOUR NAME *</label>
                      <input 
                        type="text" 
                        placeholder="Vishwanath Rao" 
                        className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-green transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">EMAIL ADDRESS *</label>
                      <input 
                        type="email" 
                        placeholder="vishwa@company.in" 
                        className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-green transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">COMPANY / STARTUP</label>
                    <input 
                      type="text" 
                      placeholder="Acme Technologies" 
                      className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-green transition-colors"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">PROJECT SCOPE *</label>
                    <input 
                      type="text" 
                      placeholder="Full-stack SaaS with an AI-powered recommendation engine" 
                      className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-green transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">BUDGET RANGE</label>
                      <div className="relative">
                        <select className="w-full bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-krudex-green transition-colors">
                          <option value="" disabled selected hidden>Select</option>
                          <option value="under-10l" className="bg-krudex-card text-white">Under ₹10 Lakhs</option>
                          <option value="10l-25l" className="bg-krudex-card text-white">₹10 Lakhs - ₹25 Lakhs</option>
                          <option value="25l-50l" className="bg-krudex-card text-white">₹25 Lakhs - ₹50 Lakhs</option>
                          <option value="50l+" className="bg-krudex-card text-white">₹50 Lakhs+</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-krudex-muted pointer-events-none" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">TIMELINE</label>
                      <div className="relative">
                        <select className="w-full bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-krudex-green transition-colors">
                          <option value="" disabled selected hidden>Select</option>
                          <option value="asap" className="bg-krudex-card text-white">ASAP</option>
                          <option value="1-3-months" className="bg-krudex-card text-white">1 - 3 Months</option>
                          <option value="3-6-months" className="bg-krudex-card text-white">3 - 6 Months</option>
                          <option value="flexible" className="bg-krudex-card text-white">Flexible</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-krudex-muted pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">ADDITIONAL DETAILS</label>
                    <textarea 
                      placeholder="Existing stack, compliance requirements, integration constraints, deadline pressure..." 
                      rows={4}
                      className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-green transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="button" 
                    className="w-full bg-krudex-green text-krudex-black font-bold py-4 hover:bg-krudex-green-hover transition-colors mt-4"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right: FAQ & SLA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col pt-2 lg:pt-0"
            >
              <h2 className="text-white text-2xl font-bold mb-8">Frequently asked</h2>
              <div className="flex flex-col gap-3 mb-10">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-krudex-card/30 border border-krudex-border/30 overflow-hidden transition-colors hover:border-krudex-border/60">
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-white text-sm font-medium pr-8">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-krudex-muted flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-krudex-green' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-krudex-muted text-sm leading-relaxed border-t border-krudex-border/30 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* SLA Block */}
              <div className="bg-krudex-card/30 border border-krudex-border/30 p-8">
                <div className="text-[10px] uppercase tracking-[0.2em] text-krudex-green font-mono mb-4">
                  RESPONSE SLA
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Within 24 hours</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">
                  All inquiries receive a response within one business day. Complex technical queries may receive a follow-up call request.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
