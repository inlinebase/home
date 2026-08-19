"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink, Menu, Phone, Mail, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Showreel", href: "#showreel" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "SaaS Products", href: "#saas-products" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-2xl"
            : "bg-transparent py-4 sm:py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Company Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 sm:gap-3 text-white focus:outline-none"
            data-cursor="HOME"
          >
            <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 bg-white transition-transform duration-300 group-hover:scale-125 group-hover:rotate-45 shrink-0" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-xl tracking-tight uppercase leading-none">
                INLINEBASE
              </span>
              <span className="font-mono-code text-[8px] sm:text-[9px] text-zinc-400 tracking-widest uppercase">
                TECHNOLOGIES PVT LTD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-[#0c0c10]/70 px-4 py-1.5 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono-code tracking-wider uppercase transition-colors duration-200 ${
                    isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
                  }`}
                  data-cursor="GO"
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-white transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons: On mobile, CTA is in drawer to avoid header clutter */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={COMPANY_INFO.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono-code tracking-wider text-zinc-300 hover:text-white transition-colors px-3 py-2 rounded-full border border-white/10 hover:border-white/30"
              data-cursor="AGENCY"
            >
              <span>Agency Portal</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.03]"
              data-cursor="TALK"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full border border-white/15 bg-zinc-900/90 text-white transition-colors hover:bg-zinc-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Sheet */}
      <div
        className={`fixed inset-0 z-40 bg-[#07070a]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        <div className="pt-20 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)] no-scrollbar">
          {/* Mobile Main CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full flex items-center justify-between rounded-2xl bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-2xl active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Start a Project</span>
            </div>
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="flex items-center justify-between">
            <p className="font-mono-code text-[11px] text-zinc-500 uppercase tracking-widest">
              // Navigation Menu
            </p>
            <span className="font-mono-code text-[10px] text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
              INLINEBASE UI
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? "bg-white/10 border-white/30 text-white font-bold"
                      : "bg-white/5 border-transparent text-zinc-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs text-zinc-500">0{index + 1}</span>
                    <span className="text-xl font-display font-extrabold tracking-tight">{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Contact Details in Mobile Drawer */}
        <div className="border-t border-white/10 pt-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-code text-white active:bg-white/10"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-400" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono-code text-white active:bg-white/10"
            >
              <Phone className="h-3.5 w-3.5 text-zinc-400" />
              <span>Call</span>
            </a>
          </div>

          <a
            href={COMPANY_INFO.agencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono-code text-zinc-300 hover:text-white"
          >
            <span>Visit Agency Portal</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </>
  );
}
