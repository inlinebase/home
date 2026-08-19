"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const contactEl = document.getElementById("contact");
      
      // Hide bottom bar when user reaches the contact form section to prevent overlap
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7) {
          setVisible(false);
          return;
        }
      }

      if (currentScrollY > 100 && currentScrollY > lastScrollY + 10) {
        // Scrolling down
        setVisible(true);
      } else {
        // Scrolling up
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-40 lg:hidden transition-all duration-500 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-md rounded-full bg-[#0a0a0e]/90 backdrop-blur-xl border border-white/20 p-2 shadow-2xl flex items-center justify-between gap-2">
        {/* Email Shortcut */}
        <a
          href={`mailto:${COMPANY_INFO.email}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/10 border border-white/15 text-white font-mono-code text-[11px] uppercase tracking-wider hover:bg-white/20 transition-colors"
          aria-label="Email Us"
        >
          <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-300" />
          <span>Email</span>
        </a>

        {/* Primary Start Project CTA */}
        <a
          href="#contact"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white text-black font-bold font-mono-code text-[11px] uppercase tracking-wider shadow-lg hover:bg-zinc-200 transition-colors shrink-0"
        >
          <span>Start Project</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        {/* Call Shortcut */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-white/10 border border-white/15 text-white font-mono-code text-[11px] uppercase tracking-wider hover:bg-white/20 transition-colors"
          aria-label="Call Us"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-zinc-300" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
}
