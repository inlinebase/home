"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY_INFO } from "@/data/companyData";
import { ArrowUpRight, CheckCircle2, ExternalLink, Loader2, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Attractive Website",
    budget: "$10k - $25k",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-box",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Valid work email is required";
    if (!formData.message.trim() || formData.message.length < 10)
      errs.message = "Message must be at least 10 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative pt-20 pb-28 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-[11px] sm:text-xs text-zinc-400 uppercase tracking-widest mb-2.5">
              <span className="h-1.5 w-1.5 bg-white" />
              <span>05 // START A PROJECT</span>
            </div>
            <h2 className="font-display font-extrabold clamp-section text-white tracking-tight uppercase leading-none">
              LET&apos;S TALK.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono-code text-zinc-400 max-w-md leading-relaxed">
            Directly connect with Inlinebase Technologies Private Limited for your website, mobile application, or SaaS project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="contact-box p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0e0e16] border border-white/20 space-y-4 sm:space-y-6">
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Inlinebase Technologies
              </h3>

              {/* Direct Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/15 hover:border-white transition-colors"
                data-cursor="EMAIL"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                  <div>
                    <span className="font-mono-code text-[9px] sm:text-[10px] text-zinc-400 uppercase block">Email Us</span>
                    <span className="font-mono-code text-xs sm:text-sm text-white font-bold">{COMPANY_INFO.email}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
              </a>

              {/* Direct Phone */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/15 hover:border-white transition-colors"
                data-cursor="CALL"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                  <div>
                    <span className="font-mono-code text-[9px] sm:text-[10px] text-zinc-400 uppercase block">Call Us</span>
                    <span className="font-mono-code text-xs sm:text-sm text-white font-bold">{COMPANY_INFO.phone}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
              </a>

              {/* Agency Website Link */}
              <a
                href={COMPANY_INFO.agencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/15 hover:border-white transition-colors"
                data-cursor="AGENCY"
              >
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0" />
                  <div>
                    <span className="font-mono-code text-[9px] sm:text-[10px] text-zinc-400 uppercase block">Visit Agency Portal</span>
                    <span className="font-mono-code text-xs sm:text-sm text-white font-bold truncate max-w-[180px] sm:max-w-none block">{COMPANY_INFO.agencyUrl}</span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-white shrink-0" />
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 font-mono-code">
                <MapPin className="h-4 w-4 text-white shrink-0" />
                <span>Headquarters: {COMPANY_INFO.location}</span>
              </div>
            </div>

            {/* WhatsApp Connect */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Inlinebase%20Technologies,%20I'd%20like%20to%20discuss%20a%20new%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-box group w-full flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-white hover:bg-emerald-900/60 hover:border-emerald-400 transition-all duration-300 shadow-xl"
              data-cursor="WHATSAPP"
            >
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-display font-bold text-sm sm:text-base block text-white">Instant WhatsApp Inquiry</span>
                  <span className="font-mono-code text-[11px] sm:text-xs text-emerald-300">Connect with Inlinebase Team</span>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
            </a>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="contact-box p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0e0e16] border border-white/20 text-center space-y-6 animate-in fade-in duration-500">
                <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  INQUIRY RECEIVED.
                </h3>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Inlinebase Technologies Private Limited. We will review your project details and respond within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "Attractive Website",
                      budget: "$10k - $25k",
                      message: "",
                    });
                  }}
                  className="px-6 py-3 rounded-full border border-white/20 text-xs font-mono-code uppercase text-white hover:bg-white hover:text-black transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-box p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0e0e16] border border-white/20 space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-zinc-950 border border-white/15 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 mt-1 font-mono-code block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-zinc-950 border border-white/15 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 mt-1 font-mono-code block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl bg-zinc-950 border border-white/15 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl bg-zinc-950 border border-white/15 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Attractive Website">Attractive Website</option>
                      <option value="Mobile Application">Mobile Application (iOS / Android)</option>
                      <option value="SaaS Product Engineering">SaaS Product Architecture</option>
                      <option value="All of the above">Full Digital Suite</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono-code text-xs text-zinc-400 uppercase tracking-wider block mb-2">
                    Project Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your website, app, or SaaS idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-zinc-950 border border-white/15 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors"
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 font-mono-code block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {serverError && (
                  <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono-code leading-relaxed">
                    ⚠️ {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-white py-4 font-mono-code text-xs uppercase font-bold tracking-widest text-black transition-all duration-300 hover:bg-zinc-200 cursor-pointer shadow-xl"
                  data-cursor="SUBMIT"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-black" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Start a Project</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
