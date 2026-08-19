"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function Footer() {
  const [utcTime, setUtcTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setUtcTime(
        now.toISOString().substring(11, 19) + " UTC"
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 pt-16 sm:pt-20 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 bg-white shrink-0" />
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight uppercase">
                INLINEBASE
              </span>
            </div>
            <p className="text-xs sm:text-sm font-light text-zinc-400 max-w-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>

            <div className="flex items-center gap-3 font-mono-code text-[11px] sm:text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Bhubaneswar HQ</span>
              <span className="text-zinc-600">•</span>
              <span>{utcTime || "00:00:00 UTC"}</span>
            </div>
          </div>

          {/* Contact Direct Links */}
          <div className="md:col-span-4 space-y-3 font-mono-code text-xs">
            <p className="text-zinc-500 uppercase tracking-widest mb-3 sm:mb-4">// DIRECT CONTACT</p>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span className="truncate">Email: {COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span>Phone: {COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.agencyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  <span className="truncate">Visit Agency Portal: {COMPANY_INFO.agencyUrl}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-zinc-400 pt-1">
                <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono-code text-xs">
            <p className="text-zinc-500 uppercase tracking-widest mb-3 sm:mb-4">// SECTIONS</p>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#hero" className="hover:text-white">Home</a></li>
              <li><a href="#showreel" className="hover:text-white">Cinematic Showreel</a></li>
              <li><a href="#work" className="hover:text-white">Featured Portfolio</a></li>
              <li><a href="#services" className="hover:text-white">Capabilities</a></li>
              <li><a href="#saas-products" className="hover:text-white">SaaS Ecosystem</a></li>
              <li><a href="#contact" className="hover:text-white">Start a Project</a></li>
            </ul>
          </div>
        </div>

        {/* Fully Responsive Complete Watermark Wordmark (Zero Truncation) */}
        <div className="border-t border-white/10 pt-8 pb-6 flex items-center justify-center overflow-hidden">
          <h2 className="font-display font-black text-[clamp(1.75rem,8.2vw,8.5rem)] leading-none tracking-tight text-white/10 uppercase select-none text-center max-w-full">
            INLINEBASE
          </h2>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] sm:text-xs text-zinc-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
            data-cursor="TOP"
          >
            <span>Back to top</span>
            <div className="p-2 rounded-full border border-white/10 bg-white/5">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
