"use client";

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ChevronDown, Check, AlertCircle, ArrowRight, Loader2, MessageCircle } from 'lucide-react';
import Turnstile, { TURNSTILE_SITE_KEY } from '@/components/Turnstile';
import { PHONES, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/site';
import { faqs } from '@/lib/faqs';
import ServiceSuggester from '@/components/ServiceSuggester';
import { getProgram } from '@/content/training';


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
  // Honeypot. Hidden from people; bots that fill every field reveal themselves.
  website: '',
};

const inputClass =
  'w-full bg-white/[0.03] border border-white/15 rounded-md px-4 py-3.5 text-white text-base md:text-sm placeholder:text-white/30 transition-colors hover:border-white/30 focus:outline-none focus:border-krudex-accent focus:ring-1 focus:ring-krudex-accent';
const labelClass = 'text-[13px] font-medium text-white/80';
const chipClass =
  'inline-flex items-center gap-2 min-h-11 cursor-pointer select-none rounded-full border border-white/15 px-4 text-[14px] text-white/70 transition-colors hover:border-white/40 hover:text-white peer-checked:border-krudex-accent peer-checked:bg-krudex-accent peer-checked:text-krudex-black peer-checked:font-medium peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-krudex-accent';

// Preselects the training option for visitors arriving from /training, and
// names the program when ?program= matches one of ours (unknown values are ignored).
// Kept in its own Suspense boundary so the rest of the page still prerenders.
function TrainingInterest({ onMatch }: { onMatch: (programTitle?: string) => void }) {
  const params = useSearchParams();
  const isTraining = params.get('interest') === 'training';
  const programTitle = getProgram(params.get('program'))?.title;

  useEffect(() => {
    if (isTraining) onMatch(programTitle);
  }, [isTraining, programTitle, onMatch]);

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
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileReset, setTurnstileReset] = useState(0);

  const isTrainingEnquiry = services.includes(TRAINING_SERVICE);

  const selectTraining = React.useCallback((programTitle?: string) => {
    setServices(prev => (prev.includes(TRAINING_SERVICE) ? prev : [...prev, TRAINING_SERVICE]));
    if (programTitle) {
      setFormData(prev => (prev.details.trim()
        ? prev
        : { ...prev, details: `I'm interested in the ${programTitle} training program.` }));
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Idea helper: preselect suggested services and add the idea to details.
  const applySuggestion = React.useCallback((suggested: string[], idea: string) => {
    setServicesError(false);
    setServices(suggested.filter((sv) => serviceOptions.includes(sv)));
    setFormData((prev) => ({
      ...prev,
      details: prev.details.trim() ? prev.details : idea,
    }));
  }, []);

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
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setError('Please complete the verification check below.');
      return;
    }
    setIsSubmitting(true);
    setError('');

    try {
      // Send inquiry to our backend API connected to Cloudflare D1
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          scope: services.join(', '),
          turnstileToken,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        // Show the server's message for problems the visitor can fix (validation, rate limit).
        if (res.status === 400 || res.status === 413 || res.status === 429) {
          setError(errorData?.error || "We couldn't send your inquiry.");
          return;
        }
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
      // Turnstile tokens are single-use.
      setTurnstileToken('');
      setTurnstileReset((n) => n + 1);
    }
  };

  return (
    <main className="min-h-svh bg-transparent selection:bg-krudex-accent selection:text-krudex-black flex flex-col">
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
              <div className="inline-flex items-center gap-2 border border-krudex-border px-3 py-1.5 mb-10">
                <div className="w-1.5 h-1.5 rounded-full bg-krudex-accent"></div>
                <span className="text-xs uppercase tracking-[0.2em] text-krudex-accent font-semibold">
                  CONTACT
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
                <span className="text-white">Let&apos;s build</span><br />
                <span className="text-white/45">something</span><br />
                <span className="text-white/45">serious.</span>
              </h1>
              <p className="text-krudex-muted text-base leading-relaxed max-w-md mb-10">
                Tell us what you need, whether that&apos;s a product, marketing, or student training. It takes about two minutes, and we reply within one business day.
              </p>
              <ol className="flex flex-col gap-4 text-sm">
                {(isTrainingEnquiry
                  ? ['You send your enquiry', 'We reply within 24 hours', 'We share format, dates, and fees']
                  : ['You send the brief', 'We reply within 24 hours', 'Free 30-minute scoping call']
                ).map((step, i) => (
                  <li key={step} className="flex items-center gap-4 text-white/80">
                    <span className="w-7 h-7 rounded-full border border-white/25 flex items-center justify-center font-mono text-xs text-white flex-shrink-0">
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
              <div className="bg-krudex-card/60 border border-krudex-border border-t-2 border-t-krudex-accent p-6 sm:p-8 md:p-12">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    className="flex flex-col items-start py-8"
                  >
                    <div className="w-12 h-12 rounded-full bg-krudex-accent text-krudex-black flex items-center justify-center mb-8">
                      <Check className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Inquiry received.</h2>
                    <p className="text-krudex-muted text-base leading-relaxed max-w-md mb-10">
                      Thanks for reaching out. The right person on our team will review your message and reply within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-krudex-accent hover:text-krudex-black transition-colors"
                    >
                      Send another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form className="relative flex flex-col gap-10" onSubmit={handleSubmit}>
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
                            maxLength={120}
                            placeholder="Vishwanath Rao"
                            className={inputClass}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className={labelClass}>Email *</label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                            maxLength={254}
                            inputMode="email"
                            placeholder="vishwa@company.in"
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
                          maxLength={160}
                          placeholder="Acme Technologies"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <ServiceSuggester onApply={applySuggestion} />

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
                        maxLength={5000}
                        className={`${inputClass} resize-y min-h-32`}
                      ></textarea>
                    </div>

                    {/* Honeypot: off-screen, skipped by keyboard and screen readers */}
                    <div aria-hidden="true" className="absolute w-px h-px overflow-hidden opacity-0 pointer-events-none [clip-path:inset(50%)]">
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <Turnstile onToken={setTurnstileToken} resetKey={turnstileReset} />
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
                        className="group w-full bg-krudex-accent text-krudex-black font-semibold py-4 rounded-full hover:bg-krudex-accent-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

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
                  <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">EMAIL</span>
                  <a href="mailto:krudextechnologies@gmail.com" className="inline-flex items-center min-h-11 text-white font-medium text-sm underline-offset-4 hover:underline [overflow-wrap:anywhere]">krudextechnologies@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">PHONE</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a href={`tel:${PHONES[0]}`} className="inline-flex items-center min-h-11 text-white font-medium text-sm underline-offset-4 hover:underline">{PHONE_DISPLAY}</a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">WHATSAPP</span>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 text-white font-medium text-sm underline-offset-4 hover:underline">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-krudex-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-1">OFFICE</span>
                  <span className="text-white font-medium text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* SLA Block */}
              <div className="bg-krudex-card/30 border border-krudex-border p-8 mt-4">
                <div className="text-xs uppercase tracking-[0.2em] text-krudex-muted font-mono mb-4">
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
                      type="button"
                      id={`faq-q-${idx}`}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                      aria-controls={`faq-a-${idx}`}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="text-white text-sm font-medium pr-8">{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-krudex-muted flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-white' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          id={`faq-a-${idx}`}
                          role="region"
                          aria-labelledby={`faq-q-${idx}`}
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
