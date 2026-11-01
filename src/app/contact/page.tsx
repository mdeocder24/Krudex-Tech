"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ChevronDown, Check, AlertCircle, ArrowRight, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

const faqs = [
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients globally. We overlap our working hours to ensure synchronous communication and use async tools heavily to maintain momentum."
  },
  {
    question: "Do you run Google Ads and digital marketing?",
    answer: "Yes. We plan and run Google Ads alongside SEO, social, and content, and report results through GA4 conversion tracking."
  },
  {
    question: "Do you offer training for students?",
    answer: "Yes. We train students with industry experts, in collaboration with NovaSkill Hub. Choose Student training in the form and we'll share the current format, dates, and fees."
  },
  {
    question: "How does the engagement process work?",
    answer: "For product builds, it starts with a 30-minute scoping call, followed by a technical audit. We then present a detailed architecture document and statement of work before any code is written."
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
    answer: "We typically engage on product builds starting from 4-6 weeks in duration. Our focus is on complex, high-impact systems rather than simple brochure websites."
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
  'Google Ads',
  'Digital marketing',
  'Student training',
  'Not sure yet',
];

const TRAINING_SERVICE = 'Student training';

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
  timeline: '',
  details: '',
};

const inputClass =
  'w-full bg-[#0E0B19] border border-white/10 rounded-xl px-4 py-3.5 text-white text-base md:text-sm placeholder:text-white/30 transition-all hover:border-white/20 focus:outline-none focus:border-[#7B68EE] focus:ring-1 focus:ring-[#7B68EE] shadow-inner';
const labelClass = 'text-[13px] font-semibold text-white/90';
const chipClass =
  'inline-flex items-center gap-2 min-h-11 cursor-pointer select-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2 text-xs sm:text-[13px] text-white/70 transition-all hover:border-[#7B68EE]/40 hover:text-white peer-checked:border-[#7B68EE] peer-checked:bg-gradient-to-r peer-checked:from-[#7B68EE] peer-checked:to-[#E01E5A] peer-checked:text-white peer-checked:font-semibold peer-checked:shadow-[0_0_20px_rgba(123,104,238,0.4)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#7B68EE]';

// Preselects the training option for visitors arriving from /training.
function TrainingInterest({ onMatch }: { onMatch: () => void }) {
  const isTraining = useSearchParams().get('interest') === 'training';

  useEffect(() => {
    if (isTraining) onMatch();
  }, [isTraining, onMatch]);

  return null;
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formData, setFormData] = useState(emptyForm);
  const [services, setServices] = useState<string[]>([]);
  const [servicesError, setServicesError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const isTrainingEnquiry = services.includes(TRAINING_SERVICE);

  const selectTraining = React.useCallback(() => {
    setServices(prev => (prev.includes(TRAINING_SERVICE) ? prev : [...prev, TRAINING_SERVICE]));
  }, []);

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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          services,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setIsSuccess(true);
      setFormData(emptyForm);
      setServices([]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent selection:bg-[#7B68EE]/30 selection:text-white flex flex-col">
      <Suspense fallback={null}>
        <TrainingInterest onMatch={selectTraining} />
      </Suspense>

      <Navbar />

      {/* Hero / Header Section */}
      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 relative z-10 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-[#7B68EE]/20 via-[#E01E5A]/15 to-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-[#7B68EE]/10 border border-[#7B68EE]/30 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
              <span className="text-xs uppercase tracking-wider text-[#A78BFA] font-semibold font-mono">
                DIRECT STRATEGY DESK
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight mb-4"
            >
              Let&apos;s build <span className="clickup-gradient-text">together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-krudex-muted text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              Fill out the form below. A senior engineer or mentor responds within one business day.
            </motion.p>
          </div>

          {/* Form Container */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="clickup-card p-8 sm:p-12 border border-[#7B68EE]/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(123,104,238,0.15)]"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7B68EE] to-[#00D2FF] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#7B68EE]/40">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
                    Inquiry received!
                  </h3>
                  <p className="text-krudex-muted text-sm sm:text-base max-w-md mb-8 leading-relaxed">
                    Thank you for reaching out. A senior architect will review your project scope and follow up within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="clickup-btn-secondary px-6 py-3 rounded-xl text-xs font-semibold"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <div>
                    <h2 className="font-heading font-black text-2xl text-white mb-1 tracking-tight">
                      Send an inquiry
                    </h2>
                    <p className="text-krudex-muted text-xs">
                      Fields marked <span className="text-[#F472B6] font-bold">*</span> are required.
                    </p>
                  </div>

                  {/* About you */}
                  <div className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                          placeholder="John Doe"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={labelClass}>Email address *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          inputMode="email"
                          placeholder="john@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className={labelClass}>
                        Company or college <span className="text-white/40 font-normal">(optional)</span>
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

                  {/* Project scope options */}
                  <fieldset className="flex flex-col gap-3" aria-describedby={servicesError ? 'services-error' : undefined}>
                    <legend className={`${labelClass} mb-2`}>What do you need? *</legend>
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
                      <p id="services-error" role="alert" className="flex items-center gap-2 text-xs text-[#F472B6] mt-1 font-semibold">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        Please pick at least one area so the right architect replies.
                      </p>
                    )}
                  </fieldset>

                  {/* Timeline */}
                  <fieldset>
                    <legend className={`${labelClass} mb-2`}>
                      Timeline <span className="text-white/40 font-normal">(optional)</span>
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

                  {/* Details textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="details" className={labelClass}>
                      Details <span className="text-white/40 font-normal">(optional)</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder={isTrainingEnquiry
                        ? 'What do you want to learn, and what are you studying now?'
                        : 'What are you building, who is it for, and what does success look like?'}
                      rows={4}
                      className={`${inputClass} resize-y min-h-28`}
                    ></textarea>
                  </div>

                  {/* Form Submission */}
                  <div className="flex flex-col gap-4">
                    {error && (
                      <div role="alert" className="flex items-start gap-3 border border-red-500/40 bg-red-500/10 rounded-xl p-4 text-sm text-white">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <p>
                          {error}{' '}
                          <a href="mailto:krudextechnologies@gmail.com" className="underline underline-offset-4 text-[#A78BFA]">
                            krudextechnologies@gmail.com
                          </a>
                        </p>
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="clickup-btn-primary w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group/btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-white/40 text-xs text-center">
                      We only use your details to reply to this inquiry. No spam guaranteed.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info + FAQ Section */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

            {/* Left: Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <h2 className="font-heading font-black text-2xl text-white mb-2">Get in touch</h2>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#A78BFA] shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono mb-0.5">EMAIL</span>
                  <a href="mailto:krudextechnologies@gmail.com" className="text-white font-medium text-sm hover:text-[#A78BFA] transition-colors [overflow-wrap:anywhere]">
                    krudextechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#A78BFA] shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono mb-0.5">PHONE</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href="tel:+918978261053" className="text-white font-medium text-sm hover:text-[#A78BFA] transition-colors">+91 89782 61053</a>
                    <a href="tel:+919490248160" className="text-white font-medium text-sm hover:text-[#A78BFA] transition-colors">+91 94902 48160</a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#A78BFA] shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 font-mono mb-0.5">OFFICE</span>
                  <span className="text-white font-medium text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* SLA Block */}
              <div className="clickup-card p-6 mt-4 border border-[#7B68EE]/30">
                <div className="text-[10px] uppercase tracking-wider text-[#00D2FF] font-mono mb-2 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>RESPONSE SLA</span>
                </div>
                <h3 className="text-white font-heading font-bold text-lg mb-2">Within 24 business hours</h3>
                <p className="text-krudex-muted text-xs leading-relaxed">
                  All inquiries receive a response within one business day. Technical scoping calls are scheduled directly with senior architects.
                </p>
              </div>
            </motion.div>

            {/* Right: FAQ Accordions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col"
            >
              <h2 className="font-heading font-black text-2xl text-white mb-6">Frequently asked questions</h2>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="clickup-card overflow-hidden hover:border-[#7B68EE]/40 transition-colors">
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
                    >
                      <span className="text-white text-sm font-semibold pr-6">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#A78BFA]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 text-krudex-muted text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3">
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
