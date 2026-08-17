"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowUp, CheckCircle, Cloud, Terminal, Shield } from "lucide-react";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#030303] border-t border-[#1f1f1f] pt-28 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Call to Action Box */}
        <div className="bg-[#080808] border border-neutral-800 p-8 sm:p-14 lg:p-20 relative overflow-hidden mb-24">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl relative z-10">
            <div className="status-badge mb-6">
              <Cloud size={12} className="text-white" />
              <span>AWS HOSTING READY</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-none tracking-tight mb-6">
              Start Building With Inlinebase Today
            </h2>

            <p className="text-neutral-400 font-body text-lg leading-relaxed mb-10">
              Deploy your first sub-millisecond cluster on AWS, GCP, or bare metal in under 60 seconds.
            </p>

            {/* Email Form */}
            {submitted ? (
              <div className="p-4 bg-neutral-900 border border-white flex items-center gap-3 text-white font-ui text-sm">
                <CheckCircle size={18} className="text-emerald-400" />
                <span>Access request received. Check your inbox for API credentials.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#030303] border border-neutral-700 text-white placeholder-neutral-500 font-ui px-5 py-4 flex-1 focus:outline-none focus:border-white transition-colors"
                />
                <button type="submit" className="btn-primary whitespace-nowrap !py-4">
                  Request API Key
                  <ArrowUpRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Giant Monogram Typography */}
        <div className="py-12 border-b border-neutral-900 text-center select-none overflow-hidden">
          <span className="giant-title-outlined tracking-tighter hover:text-white transition-colors cursor-default">
            INLINEBASE
          </span>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6 font-ui text-xs text-neutral-500">
          <div className="flex items-center gap-4">
            <span className="text-white font-bold tracking-wider">INLINEBASE INC.</span>
            <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a href="#capabilities" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#architecture" className="hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#benchmarks" className="hover:text-white transition-colors">
              Benchmarks
            </a>
            <a href="#manifesto" className="hover:text-white transition-colors">
              Manifesto
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors ml-4 p-2 bg-neutral-900 border border-neutral-800"
            >
              <ArrowUp size={14} /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
