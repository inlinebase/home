"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Phone, Mail, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  onOpenBookCall: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBookCall }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactBarRef = useRef<HTMLDivElement>(null);

  // Minimalist Luxury Agency Service Word Loop
  const words = ["Websites", "Applications", "Platforms", "Digital Systems"];
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // Headline Character Reveal simulation
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
      );

      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );

      tl.fromTo(
        contactBarRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=917008720822&text=${encodeURIComponent(
    "Hello INLINEBASE, I want to discuss a website project."
  )}`;

  const emailUrl = `mailto:agencyinlinebase@gmail.com?subject=${encodeURIComponent(
    "New Website Project Inquiry - INLINEBASE"
  )}&body=${encodeURIComponent(
    "Hello INLINEBASE Team,\n\nI am interested in designing and developing a website for my business. I would like to learn more about your services, timeline, and pricing.\n\nBest regards,"
  )}`;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-36 pb-16 px-6 md:px-12 bg-white text-black overflow-hidden select-none"
    >
      {/* Background Subtle Geometric Moving Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Subtle Animated Horizontal Line */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-neutral-200/40 pointer-events-none" />

      {/* Hero Content Container (Centered on mobile, left-aligned on sm desktop) */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10 space-y-8 flex flex-col items-center sm:items-start text-center sm:text-left">
        {/* Top Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border border-neutral-200 text-[11px] font-mono tracking-widest uppercase text-neutral-800 mx-auto sm:mx-0">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span>PREMIUM DIGITAL AGENCY • INDIA</span>
        </div>

        {/* Large Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-[0.95] max-w-6xl space-y-1 sm:space-y-2 w-full text-center sm:text-left"
        >
          {/* Row 1: Premium [Minimalist Animated Word Reveal] */}
          <div className="flex flex-nowrap whitespace-nowrap items-baseline justify-center sm:justify-start gap-x-2 sm:gap-x-4 max-w-full">
            <span className="shrink-0">Premium</span>
            <div className="relative inline-flex items-baseline overflow-hidden py-1 shrink-0 whitespace-nowrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: "80%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-80%" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-baseline gap-2 sm:gap-3 text-black whitespace-nowrap"
                >
                  <span className="underline decoration-black/30 underline-offset-[8px] md:underline-offset-[14px] decoration-[3px] md:decoration-[5px] transition-all whitespace-nowrap">
                    {words[wordIndex].split("").map((char, i) => (
                      <motion.span
                        key={`${words[wordIndex]}-${i}`}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: i * 0.02,
                          ease: "easeOut",
                        }}
                        className="inline-block whitespace-nowrap"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-neutral-400 select-none py-0.5 px-2 bg-neutral-100 border border-neutral-200/80 rounded-xs shrink-0">
                    0{wordIndex + 1}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Row 2: That Build Trust. */}
          <div className="font-light italic text-neutral-600 text-center sm:text-left">
            That Build Trust.
          </div>
        </h1>

        {/* Subheading */}
        <p
          ref={subtextRef}
          className="text-lg sm:text-xl md:text-2xl font-light text-neutral-700 max-w-2xl leading-relaxed text-center sm:text-left mx-auto sm:mx-0"
        >
          We design high-performance digital experiences for brands that demand excellence in Medical, Restaurants, Resorts, and Law Firms.
        </p>

        {/* Action Buttons */}
        <div ref={buttonsRef} className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-4 pt-2 w-full max-w-md sm:max-w-none">
          <Link
            href="/portfolio"
            data-cursor="PORTFOLIO"
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-8 py-3.5 sm:py-4 bg-black text-white text-[11px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-md"
          >
            <span>View Portfolio</span>
            <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform shrink-0" />
          </Link>

          <button
            onClick={onOpenBookCall}
            data-cursor="CONTACT"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-8 py-3.5 sm:py-4 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-black text-[11px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest uppercase transition-all"
          >
            <span>Book a Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </button>
        </div>

        {/* Quick Hero Contact Bar (Direct Phone & Email for Instant Client Reach) */}
        <div
          ref={contactBarRef}
          className="pt-6 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs font-mono text-neutral-700"
        >
          <span className="uppercase text-[10px] text-neutral-400 font-bold tracking-widest shrink-0">
            QUICK CONTACT:
          </span>

          <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:+917008720822"
              className="inline-flex items-center justify-center sm:justify-start gap-2.5 font-bold text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/90 py-2.5 px-4 sm:py-1.5 sm:px-3.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-black shrink-0" />
              <span className="tracking-wider">+91 7008720822</span>
            </a>

            <a
              href={emailUrl}
              className="inline-flex items-center justify-center sm:justify-start gap-2.5 font-bold text-black bg-neutral-100 hover:bg-neutral-200 border border-neutral-200/90 py-2.5 px-4 sm:py-1.5 sm:px-3.5 transition-all min-w-0"
            >
              <Mail className="w-3.5 h-3.5 text-black shrink-0" />
              <span className="truncate">agencyinlinebase@gmail.com</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center sm:justify-start gap-2.5 font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] py-2.5 px-4 sm:py-1.5 sm:px-3.5 transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366] shrink-0" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto w-full pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-neutral-500 gap-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 uppercase tracking-wider text-[11px] sm:text-xs">
          <span>01 / MEDICAL</span>
          <span>02 / RESTAURANT</span>
          <span>03 / RESORT</span>
          <span>04 / LAW FIRM</span>
        </div>
        <div className="uppercase tracking-widest text-neutral-400 text-[10px] sm:text-xs">
          INDIAN RUPEE PRICING • BAUNFIRE MINIMALISM
        </div>
      </div>
    </section>
  );
};
