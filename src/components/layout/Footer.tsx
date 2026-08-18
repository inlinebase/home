"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/common/Logo";

interface FooterProps {
  onOpenBookCall: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookCall }) => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top CTA Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-16 border-b border-neutral-900">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">
              START A PROJECT
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mt-3 text-white">
              Let's Build Something Premium.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
            <button
              onClick={onOpenBookCall}
              data-cursor="BOOK"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-mono font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all"
            >
              <span>Book a Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-neutral-800 text-white text-xs font-mono tracking-widest uppercase hover:border-white transition-colors"
            >
              Request Proposal
            </Link>
          </div>
        </div>

        {/* Middle Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          {/* Col 1: Brand Info */}
          <div className="space-y-6 md:col-span-1">
            <Logo variant="default" className="text-white" />
            <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-xs">
              INLINEBASE is a high-end digital web agency specializing in designing and developing premium websites for Medical, Restaurants & Cafés, Resorts, and Law Firms.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-neutral-400">
              {["Home", "Services", "Industries", "Portfolio", "Process", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Niche Specializations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-neutral-400">
              <li>
                <Link href="/portfolio/medical" className="hover:text-white transition-colors">
                  Medical & Healthcare
                </Link>
              </li>
              <li>
                <Link href="/portfolio/restaurant" className="hover:text-white transition-colors">
                  Restaurants & Cafés
                </Link>
              </li>
              <li>
                <Link href="/portfolio/resort" className="hover:text-white transition-colors">
                  Resorts & Hospitality
                </Link>
              </li>
              <li>
                <Link href="/portfolio/law-firm" className="hover:text-white transition-colors">
                  Law Firms & Legal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Contact & Social
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-neutral-400">
              <li>
                <a
                  href={`mailto:agencyinlinebase@gmail.com?subject=${encodeURIComponent(
                    "New Project Inquiry - INLINEBASE"
                  )}&body=${encodeURIComponent(
                    "Hello INLINEBASE Team,\n\nI am interested in designing and developing a website for my business. I would like to learn more about your services, timeline, and pricing.\n\nBest regards,"
                  )}`}
                  className="hover:text-white transition-colors text-white font-semibold"
                >
                  agencyinlinebase@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917008720822" className="hover:text-white transition-colors text-white font-semibold">
                  +91 7008720822
                </a>
              </li>
              <li className="pt-2 border-t border-neutral-900">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="h-[1px] w-full bg-neutral-900 my-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-neutral-600 w-1/4 animate-pulse" />
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-mono text-neutral-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} INLINEBASE DIGITAL AGENCY. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-800 text-neutral-300 hover:text-white hover:border-white transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
