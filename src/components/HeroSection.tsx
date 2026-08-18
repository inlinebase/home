"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Cpu, Zap, Activity, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const brandName = "INLINEBASE";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Kinetic Stagger Entrance for INLINEBASE Oversized Letters
      gsap.fromTo(
        titleLettersRef.current,
        {
          y: 100,
          opacity: 0,
          rotateX: -75,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.1,
          stagger: 0.04,
          ease: "power4.out",
          delay: 0.15,
        }
      );

      // 2. Sub-Headline Fade and Slide
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.7 }
        );
      }

      // 3. Action Buttons Reveal
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.9 }
        );
      }

      // 4. Live Stats Ticker Fade Up
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.1 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-[#050505] border-b border-[#1f1f1f]"
    >
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between px-6 md:px-16">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 my-auto w-full">
        {/* Status Tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-900/90 border border-neutral-800 text-neutral-300 font-ui text-xs tracking-wider uppercase">
          <Zap size={13} className="text-white animate-pulse" />
          <span>Sub-Millisecond Memory Engine</span>
        </div>

        {/* GSAP Giant Font Title */}
        <div className="my-2 overflow-hidden w-full">
          <h1 className="giant-title flex flex-wrap items-center justify-between gap-x-1 sm:gap-x-2 select-none py-1 w-full">
            {brandName.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) titleLettersRef.current[index] = el;
                }}
                className="inline-block transform-gpu origin-bottom transition-colors hover:text-neutral-400 cursor-default"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Description & Action Buttons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-6">
          <div className="lg:col-span-7">
            <p
              ref={subtextRef}
              className="text-base sm:text-xl md:text-2xl text-neutral-300 font-body font-light leading-relaxed max-w-2xl"
            >
              The minimal, high-velocity data engine designed for zero-copy memory pipelines, deterministic indexing, and real-time inference workloads.
            </p>
          </div>

          <div
            ref={ctaRef}
            className="lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end"
          >
            <a href="#architecture" className="btn-primary">
              Explore Engine
              <Cpu size={18} />
            </a>
            <a href="#benchmarks" className="btn-secondary">
              View Benchmarks
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Live Telemetry Ticker Banner */}
      <div
        ref={statsRef}
        className="container mx-auto px-6 mt-12 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 font-ui"
      >
        <div className="flex flex-col gap-1.5 p-3 bg-neutral-950/60 border border-neutral-900">
          <span className="text-[11px] text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={13} className="text-emerald-400" /> Read Latency
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading">
            0.14 <span className="text-xs font-normal text-neutral-400">ms</span>
          </span>
        </div>

        <div className="flex flex-col gap-1.5 p-3 bg-neutral-950/60 border border-neutral-900">
          <span className="text-[11px] text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
            <Zap size={13} className="text-white" /> Throughput
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading">
            8.4M <span className="text-xs font-normal text-neutral-400">ops/sec</span>
          </span>
        </div>

        <div className="flex flex-col gap-1.5 p-3 bg-neutral-950/60 border border-neutral-900">
          <span className="text-[11px] text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-white" /> Memory Copy
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading">
            0 <span className="text-xs font-normal text-neutral-400">overhead</span>
          </span>
        </div>

        <div className="flex flex-col gap-1.5 p-3 bg-neutral-950/60 border border-neutral-900">
          <span className="text-[11px] text-neutral-500 uppercase tracking-widest">
            Uptime SLA
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading">
            99.999%
          </span>
        </div>
      </div>
    </section>
  );
}
