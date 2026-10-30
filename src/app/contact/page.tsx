"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ChevronDown, Check, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';

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
  'w-full bg-krudex-surface/80 border border-krudex-border rounded-xl px-4 py-3.5 text-white text-base md:text-sm placeholder:text-krudex-muted/50 transition-all hover:border-krudex-border focus:outline-none focus:border-krudex-accent focus:ring-1 focus:ring-krudex-accent shadow-inner';
const labelClass = 'text-[13px] font-medium text-white/90';
const chipClass =
  'inline-flex items-center gap-2 min-h-11 cursor-pointer select-none rounded-full border border-krudex-border px-4 py-2 text-[13.5px] text-white/70 transition-all hover:border-krudex-accent/40 hover:text-white peer-checked:border-krudex-accent peer-checked:bg-krudex-accent peer-checked:text-white peer-checked:font-medium peer-checked:shadow-[0_0_15px_rgba(229,43,59,0.35)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-krudex-accent';

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
          scope: services.join(', '),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to submit inquiry');
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
    <main className="min-h-screen bg-transparent selection:bg-krudex-accent selection:text-white flex flex-col">
      <Suspense fallback={null}>
        <TrainingInterest onMatch={selectTraining} />
      </Suspense>
      <Navbar />

      <section className="px-6 md:px-16 lg:px-24 pt-40 md:pt-48 pb-20 bg-krudex-black/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header + Form Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3.5 py-1.5 mb-10 rounded-full bg-krudex-surface/60">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent shadow-[0_0_8px_#E52B3B]"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold font-mono">
                  CONTACT US
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                <span className="text-white">Let&apos;s build</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-krudex-muted">
                  something serious.
                </span>
              </h1>
              <p className="text-krudex-muted text-base leading-relaxed max-w-md mb-10">
                Tell us what you need, whether that&apos;s a SaaS product, digital marketing, or student training. It takes two minutes, and we reply within one business day.
              </p>
              <ol className="flex flex-col gap-4 text-sm">
                {(isTrainingEnquiry
                  ? ['You send your enquiry', 'We reply within 24 hours', 'We share format, dates, and fees']
                  : ['You send the brief', 'We reply within 24 hours', 'Free 30-minute scoping call']
                ).map((step, i) => (
                  <li key={step} className="flex items-center gap-4 text-white/85">
                    <span className="w-7 h-7 rounded-full bg-krudex-accent/10 border border-krudex-accent/30 flex items-center justify-center font-mono text-xs text-krudex-accent font-semibold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{step}</span>
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
              <div className="rounded-3xl bg-krudex-card/90 border border-krudex-border border-t-2 border-t-krudex-accent p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="flex flex-col items-start py-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-krudex-accent text-white shadow-[0_0_20px_#E52B3B] flex items-center justify-center mb-8">
                      <Check className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Inquiry received.</h2>
                    <p className="text-krudex-muted text-base leading-relaxed max-w-md mb-10">
                      Thanks for reaching out. A senior member of our team will review your message and reply within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="border border-krudex-border text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-krudex-accent hover:border-krudex-accent transition-all duration-300"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div>
                      <h2 className="text-white text-2xl font-bold mb-2">Send an inquiry</h2>
                      <p className="text-krudex-muted text-sm">
                        Fields marked <span className="text-krudex-accent">*</span> are required.
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
                          Company or college <span className="text-krudex-muted font-normal">(optional)</span>
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
                        <p id="services-error" role="alert" className="flex items-center gap-2 text-sm text-krudex-accent mt-1">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          Please pick at least one area so the right architect replies.
                        </p>
                      )}
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

                    <div className="flex flex-col gap-2">
                      <label htmlFor="details" className={labelClass}>
                        Details <span className="text-krudex-muted font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder={isTrainingEnquiry
                          ? 'What do you want to learn, and what are you studying now?'
                          : 'What are you building, who is it for, and what does success look like?'}
                        rows={5}
                        className={`${inputClass} resize-y min-h-32`}
                      ></textarea>
                    </div>

                    <div className="flex flex-col gap-4">
                      {error && (
                        <div role="alert" className="flex items-start gap-3 border border-red-500/40 bg-red-500/10 rounded-xl p-4 text-sm text-white">
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p>
                            {error}{' '}
                            <a href="mailto:krudextechnologies@gmail.com" className="underline underline-offset-4 text-krudex-accent">
                              krudextechnologies@gmail.com
                            </a>
                          </p>
                        </div>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group w-full bg-krudex-accent text-white font-semibold py-4 rounded-full hover:bg-krudex-accent-hover shadow-[0_0_30px_rgba(229,43,59,0.35)] hover:shadow-[0_0_45px_rgba(229,43,59,0.55)] border border-krudex-accent/60 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Inquiry</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <p className="text-krudex-muted text-xs text-center">
                        We only use your details to reply to this inquiry. No spam guaranteed.
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

            {/* Left: Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col gap-8"
            >
              <h2 className="text-white text-2xl font-bold mb-2">Get in touch</h2>

              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-krudex-surface border border-krudex-border flex items-center justify-center flex-shrink-0 text-krudex-accent shadow-[0_0_15px_rgba(229,43,59,0.1)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">EMAIL</span>
                  <a href="mailto:krudextechnologies@gmail.com" className="inline-flex items-center min-h-11 text-white font-medium text-sm underline-offset-4 hover:text-krudex-accent transition-colors [overflow-wrap:anywhere]">
                    krudextechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-krudex-surface border border-krudex-border flex items-center justify-center flex-shrink-0 text-krudex-accent shadow-[0_0_15px_rgba(229,43,59,0.1)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">PHONE</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href="tel:+918978261053" className="inline-flex items-center min-h-11 text-white font-medium text-sm underline-offset-4 hover:text-krudex-accent transition-colors">+91 89782 61053</a>
                    <a href="tel:+919490248160" className="inline-flex items-center min-h-11 text-white font-medium text-sm underline-offset-4 hover:text-krudex-accent transition-colors">+91 94902 48160</a>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-krudex-surface border border-krudex-border flex items-center justify-center flex-shrink-0 text-krudex-accent shadow-[0_0_15px_rgba(229,43,59,0.1)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">OFFICE</span>
                  <span className="text-white font-medium text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* SLA Block */}
              <div className="rounded-2xl bg-krudex-card/80 border border-krudex-border p-8 mt-2">
                <div className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-mono mb-4 font-semibold">
                  RESPONSE SLA
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Within 24 business hours</h3>
                <p className="text-krudex-muted text-sm leading-relaxed">
                  All inquiries receive a response within one business day. Technical scoping calls are scheduled directly with senior architects.
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
              <h2 className="text-white text-2xl font-bold mb-8">Frequently asked questions</h2>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-xl bg-krudex-card/70 border border-krudex-border overflow-hidden transition-all hover:border-krudex-accent/40">
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <span className="text-white text-sm font-medium pr-8">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-krudex-muted flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-krudex-accent' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-white/70 text-sm leading-relaxed border-t border-krudex-border/60 pt-4">
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
