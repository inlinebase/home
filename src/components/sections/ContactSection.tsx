"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "Medical",
    budget: "$25k - $50k",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#FFFFFF", "#000000", "#AAAAAA"],
    });
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-white text-black overflow-hidden border-t border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-neutral-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
              INITIATE COLLABORATION
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 text-black">
              Let's Build Something.
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-600 max-w-md leading-relaxed">
            Tell us about your project scope, target timeline, and industry goals. We respond within 24 business hours.
          </p>
        </div>

        {/* Contact Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400">DIRECT EMAIL</span>
              <a
                href={`mailto:agencyinlinebase@gmail.com?subject=${encodeURIComponent(
                  "New Project Inquiry - INLINEBASE"
                )}&body=${encodeURIComponent(
                  "Hello INLINEBASE Team,\n\nI am interested in designing and developing a website for my business. I would like to learn more about your services, timeline, and pricing.\n\nBest regards,"
                )}`}
                className="block text-lg font-bold font-mono text-black hover:underline"
              >
                agencyinlinebase@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400">PHONE INQUIRIES</span>
              <a
                href="tel:+917008720822"
                className="block text-lg font-bold font-mono text-black hover:underline"
              >
                +91 7008720822
              </a>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-neutral-400">HEADQUARTERS</span>
              <p className="text-sm text-neutral-700 leading-relaxed font-mono">
                INLINEBASE Studio <br />
                500 Howard Street, Suite 400 <br />
                San Francisco, CA 94105
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-200">
              <span className="text-xs font-mono uppercase text-neutral-400">RESPONSE GUARANTEE</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                All client project submissions are reviewed under standard mutual NDA confidentiality guidelines.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-8 bg-neutral-50 border border-neutral-200 p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-16 space-y-6 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-black text-white rounded-full">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold tracking-tight">Proposal Request Received</h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, <strong className="text-black">{formData.name}</strong>. Our senior partners have received your briefing for <strong className="text-black">{formData.company || "your organization"}</strong> and will reach out via <strong className="text-black">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="marcus@company.com"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Industry Select */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                      Industry Category
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors font-sans"
                    >
                      <option value="Medical">Medical & Healthcare</option>
                      <option value="Restaurant">Restaurant & Cafe</option>
                      <option value="Resort">Resort & Hospitality</option>
                      <option value="Law Firm">Law Firm & Legal</option>
                      <option value="Other">Other Luxury Sector</option>
                    </select>
                  </div>
                </div>

                {/* Project Budget Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                    Estimated Project Budget (INR ₹)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["₹1.5L - ₹3L", "₹3L - ₹6L", "₹6L - ₹12L", "₹12L+"].map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-2.5 text-xs font-mono uppercase border transition-all ${
                          formData.budget === b
                            ? "bg-black text-white border-black"
                            : "bg-white text-neutral-700 border-neutral-300 hover:border-black"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                    Project Overview & Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, desired launch date, or specific feature requirements..."
                    className="w-full px-4 py-3 bg-white border border-neutral-300 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  data-cursor="SUBMIT"
                  className="w-full group inline-flex items-center justify-center gap-3 py-5 bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-all font-bold"
                >
                  <span>Let's Build Something</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
