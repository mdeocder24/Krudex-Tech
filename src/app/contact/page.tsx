"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ChevronDown, Check, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
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

const serviceOptions = [
  'Web platform',
  'Mobile app',
  'AI integration',
  'UI/UX design',
  'Not sure yet',
];

const budgetOptions = [
  { value: 'under-10l', label: 'Under ₹10L' },
  { value: '10l-25l', label: '₹10L – ₹25L' },
  { value: '25l-50l', label: '₹25L – ₹50L' },
  { value: '50l+', label: '₹50L+' },
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-3-months', label: '1 – 3 months' },
  { value: '3-6-months', label: '3 – 6 months' },
  { value: 'flexible', label: 'Flexible' },
];

const emptyForm = {
  name: '',
  email: '',
  company: '',
  budget: '',
  timeline: '',
  details: '',
};

const inputClass =
  'w-full bg-white/[0.03] border border-white/15 rounded-md px-4 py-3.5 text-white text-base md:text-sm placeholder:text-white/30 transition-colors hover:border-white/30 focus:outline-none focus:border-white focus:ring-1 focus:ring-white';
const labelClass = 'text-[13px] font-medium text-white/80';
const chipClass =
  'inline-flex items-center gap-2 cursor-pointer select-none rounded-full border border-white/15 px-4 py-2.5 text-[13px] text-white/70 transition-colors hover:border-white/40 hover:text-white peer-checked:border-white peer-checked:bg-white peer-checked:text-krudex-black peer-checked:font-medium peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState(emptyForm);
  const [services, setServices] = useState<string[]>([]);
  const [servicesError, setServicesError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setServicesError(false);
    setServices(prev => (prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (services.length === 0) {
      setServicesError(true);
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      // Write data to Supabase
      const { error } = await supabase
        .from('inquiries')
        .insert([{
          ...formData,
          scope: services.join(', '),
        }]);

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      setFormData(emptyForm);
      setServices([]);
    } catch (err: unknown) {
      console.error("Error submitting form: ", err);
      setError("We couldn't send your inquiry. Please try again, or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header + Form Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                  CONTACT
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                <span className="text-white">Let&apos;s build</span><br />
                <span className="text-white/45">something</span><br />
                <span className="text-white/45">serious.</span>
              </h1>
              <p className="text-krudex-muted text-base leading-relaxed max-w-md mb-10">
                Tell us what you&apos;re building. It takes about two minutes, and we reply within one business day.
              </p>
              <ol className="flex flex-col gap-4 text-sm">
                {['You send the brief', 'We reply within 24 hours', 'Free 30-minute scoping call'].map((step, i) => (
                  <li key={step} className="flex items-center gap-4 text-white/80">
                    <span className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center font-mono text-[11px] text-white flex-shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="bg-krudex-card/60 border border-krudex-border border-t-2 border-t-white p-6 sm:p-8 md:p-12">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="flex flex-col items-start py-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-krudex-black flex items-center justify-center mb-8">
                      <Check className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Inquiry received.</h2>
                    <p className="text-krudex-muted text-base leading-relaxed max-w-md mb-10">
                      Thanks for reaching out. A senior engineer will review your brief and reply within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-krudex-black transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div>
                      <h2 className="text-white text-2xl font-bold mb-2">Send an inquiry</h2>
                      <p className="text-krudex-muted text-sm">
                        Fields marked <span className="text-white">*</span> are required.
                      </p>
                    </div>

                    {/* About you */}
                    <div className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className={labelClass}>Your name *</label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                            placeholder="Vishwanath Rao"
                            className={inputClass}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className={labelClass}>Work email *</label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            inputMode="email"
                            placeholder="vishwa@company.in"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className={labelClass}>
                          Company <span className="text-krudex-muted font-normal">(optional)</span>
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          autoComplete="organization"
                          placeholder="Acme Technologies"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Project */}
                    <fieldset className="flex flex-col gap-3" aria-describedby={servicesError ? 'services-error' : undefined}>
                      <legend className={`${labelClass} mb-3`}>What do you need? *</legend>
                      <div className="flex flex-wrap gap-2.5">
                        {serviceOptions.map((service) => (
                          <label key={service} className="relative">
                            <input
                              type="checkbox"
                              className="peer sr-only"
                              checked={services.includes(service)}
                              onChange={() => toggleService(service)}
                            />
                            <span className={chipClass}>{service}</span>
                          </label>
                        ))}
                      </div>
                      {servicesError && (
                        <p id="services-error" role="alert" className="flex items-center gap-2 text-sm text-white">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          Pick at least one so we know who should reply.
                        </p>
                      )}
                    </fieldset>

                    <div className="grid grid-cols-1 gap-8">
                      <fieldset>
                        <legend className={`${labelClass} mb-3`}>
                          Budget range <span className="text-krudex-muted font-normal">(optional)</span>
                        </legend>
                        <div className="flex flex-wrap gap-2.5">
                          {budgetOptions.map((option) => (
                            <label key={option.value} className="relative">
                              <input
                                type="radio"
                                name="budget"
                                value={option.value}
                                className="peer sr-only"
                                checked={formData.budget === option.value}
                                onChange={handleChange}
                              />
                              <span className={chipClass}>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <fieldset>
                        <legend className={`${labelClass} mb-3`}>
                          Timeline <span className="text-krudex-muted font-normal">(optional)</span>
                        </legend>
                        <div className="flex flex-wrap gap-2.5">
                          {timelineOptions.map((option) => (
                            <label key={option.value} className="relative">
                              <input
                                type="radio"
                                name="timeline"
                                value={option.value}
                                className="peer sr-only"
                                checked={formData.timeline === option.value}
                                onChange={handleChange}
                              />
                              <span className={chipClass}>{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="details" className={labelClass}>
                        Project details <span className="text-krudex-muted font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="What are you building, who is it for, and what does success look like?"
                        rows={5}
                        className={`${inputClass} resize-y min-h-32`}
                      ></textarea>
                    </div>

                    <div className="flex flex-col gap-4">
                      {error && (
                        <div role="alert" className="flex items-start gap-3 border border-white/40 bg-white/[0.04] rounded-md p-4 text-sm text-white">
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p>
                            {error}{' '}
                            <a href="mailto:krudextechnologies@gmail.com" className="underline underline-offset-4">
                              krudextechnologies@gmail.com
                            </a>
                          </p>
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full bg-white text-krudex-black font-semibold py-4 rounded-full hover:bg-krudex-accent-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send inquiry
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-krudex-muted text-xs text-center">
                        We only use your details to reply to this inquiry.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info + FAQ Section */}
      <section className="px-6 md:px-16 lg:px-24 py-24 bg-krudex-black/40 backdrop-blur-md border-t border-krudex-border relative z-10">
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
                <div className="w-12 h-12 border border-krudex-border flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">EMAIL</span>
                  <a href="mailto:krudextechnologies@gmail.com" className="text-white font-medium text-sm underline-offset-4 hover:underline break-all">krudextechnologies@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">PHONE</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href="tel:+918978261053" className="text-white font-medium text-sm underline-offset-4 hover:underline">+91 89782 61053</a>
                    <a href="tel:+919490248160" className="text-white font-medium text-sm underline-offset-4 hover:underline">+91 94902 48160</a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">OFFICE</span>
                  <span className="text-white font-medium text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* SLA Block */}
              <div className="bg-krudex-card/30 border border-krudex-border p-8 mt-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-krudex-muted font-mono mb-4">
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
                  <div key={idx} className="bg-krudex-card/30 border border-krudex-border overflow-hidden transition-colors hover:border-white/25">
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="text-white text-sm font-medium pr-8">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-krudex-muted flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-white/65 text-sm leading-relaxed border-t border-krudex-border pt-4">
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
