"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
    question: "Who owns the IP and source code upon completion?",
    answer: "Krudex transfers 100% of custom source code and intellectual property (IP) rights to you upon final project milestone payment. We do not lock you into proprietary vendor frameworks."
  },
  {
    question: "What's the minimum project size you take on?",
    answer: "We typically engage on projects starting from 4-6 weeks in duration. Our focus is on complex, high-impact systems rather than simple brochure websites."
  },
  {
    question: "What if our internal data is messy or incomplete for AI integration?",
    answer: "Our AI discovery phase includes a thorough data audit. We build secure data pipelines to clean, structure, and sanitize your datasets before models are trained or RAG databases are compiled, ensuring complete security."
  },
  {
    question: "How do you handle data security and compliance?",
    answer: "We treat data privacy as a primary engineering requirement. We sign comprehensive NDAs, utilize end-to-end encryption for all pipeline stages, and design integrations adhering to SOC 2, HIPAA, and GDPR standards."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scope: '',
    budget: '',
    timeline: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Write data to Supabase
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          ...formData,
        }]);
        
      if (error) {
        throw error;
      }
      
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', scope: '', budget: '', timeline: '', details: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error("Error submitting form: ", err);
      // Supabase throws errors if the project isn't set up or RLS blocks it
      setError('Failed to send inquiry. Please check your Supabase configuration or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-blue selection:text-krudex-black flex flex-col">
      <Navbar />

      <section className="px-8 md:px-16 lg:px-24 pt-48 pb-16 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header + Form Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-blue"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-blue font-semibold">
                  CONTACT
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
                <span className="text-white">Let&apos;s build</span><br />
                <span className="text-krudex-blue">something</span><br />
                <span className="text-krudex-blue">serious.</span>
              </h1>
              <p className="text-krudex-muted text-base leading-relaxed max-w-md">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col"
            >
              <h2 className="text-white text-2xl font-bold mb-8">Send an inquiry</h2>
              <div className="bg-krudex-card/30 border border-krudex-border/30 border-t-2 border-t-krudex-blue p-8 md:p-12 relative">
                
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-0 left-0 w-full p-4 bg-green-500/20 border border-green-500/50 flex items-center gap-3 text-green-400 font-medium z-10"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Inquiry sent successfully! We will be in touch soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-0 left-0 w-full p-4 bg-red-500/20 border border-red-500/50 text-red-400 font-medium text-sm z-10"
                  >
                    {error}
                  </motion.div>
                )}

                <form className={`flex flex-col gap-8 ${isSuccess || error ? 'mt-8' : ''}`} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">YOUR NAME *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Vishwanath Rao"
                        className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-blue transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vishwa@company.in"
                        className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">COMPANY / STARTUP</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Technologies"
                      className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-blue transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">PROJECT SCOPE *</label>
                    <input
                      type="text"
                      name="scope"
                      value={formData.scope}
                      onChange={handleChange}
                      required
                      placeholder="Full-stack SaaS with an AI-powered recommendation engine"
                      className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-blue transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono">BUDGET RANGE</label>
                      <div className="relative">
                        <select 
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-krudex-blue transition-colors"
                        >
                          <option value="" disabled hidden>Select</option>
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
                        <select 
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-krudex-blue transition-colors"
                        >
                          <option value="" disabled hidden>Select</option>
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
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder="Existing stack, compliance requirements, integration constraints, deadline pressure..."
                      rows={4}
                      className="bg-transparent border border-krudex-border/50 px-4 py-3 text-white text-sm focus:outline-none focus:border-krudex-blue transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-krudex-blue text-krudex-black font-bold py-4 hover:bg-krudex-blue-hover transition-colors mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info + FAQ Section */}
      <section className="px-8 md:px-16 lg:px-24 py-24 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left: Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <h2 className="text-white text-2xl font-bold mb-4">Get in touch</h2>

              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-krudex-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">EMAIL</span>
                  <a href="mailto:krudextechnologies@gmail.com" className="text-white font-medium text-sm hover:text-krudex-blue transition-colors">krudextechnologies@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-krudex-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">PHONE</span>
                  <a href="tel:+918978261053" className="text-white font-medium text-sm hover:text-krudex-blue transition-colors">+91 89782 61053, +91 94902 48160</a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-krudex-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">OFFICE</span>
                  <span className="text-white font-medium text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* SLA Block */}
              <div className="bg-krudex-card/30 border border-krudex-border/30 p-8 mt-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-krudex-blue font-mono mb-4">
                  RESPONSE SLA
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Within 24 hours</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">
                  All inquiries receive a response within one business day. Complex technical queries may receive a follow-up call request.
                </p>
              </div>
            </motion.div>

            {/* Right: FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col"
            >
              <h2 className="text-white text-2xl font-bold mb-8">Frequently asked</h2>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-krudex-card/30 border border-krudex-border/30 overflow-hidden transition-colors hover:border-krudex-border/60">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-white text-sm font-medium pr-8">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-krudex-muted flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-krudex-blue' : ''}`} />
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
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
