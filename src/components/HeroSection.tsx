"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Cpu, Zap, Activity, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleLettersRef = useRef<HTMLSpanElement[]>([]);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const brandName = "INLINEBASE";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate Oversized Title Letters with GSAP
      gsap.fromTo(
        titleLettersRef.current,
        {
          y: 120,
          opacity: 0,
          rotateX: -90,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      // 2. Animate Subtitle
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
        );
      }

      // 3. Animate CTAs
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.0 }
        );
      }

      // 4. Animate Stats Ticker
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 1.2 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-between overflow-hidden bg-[#050505] border-b border-[#1f1f1f]"
    >
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex justify-between px-12">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-neutral-600 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 my-auto">
        {/* Top Tag */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-neutral-900/80 border border-neutral-800 text-neutral-400 font-ui text-xs tracking-wider uppercase">
          <Zap size={12} className="text-white" />
          Sub-Millisecond Memory Architecture
        </div>

        {/* GSAP Giant Font Title */}
        <div className="perspective-1000 my-4 overflow-hidden">
          <h1 className="giant-title flex flex-wrap gap-x-[0.02em] select-none py-2">
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

        {/* Subtext and CTAs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8">
          <div className="lg:col-span-7">
            <p
              ref={subtextRef}
              className="text-lg md:text-2xl text-neutral-300 font-body font-light leading-relaxed max-w-2xl"
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
            </a>
          </div>
        </div>
      </div>

      {/* Live Telemetry Banner at bottom of Hero */}
      <div
        ref={statsRef}
        className="container mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 grid grid-cols-2 md:grid-cols-4 gap-6 font-ui"
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
            <Activity size={12} className="text-emerald-400" /> Read Latency
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white font-heading">
            0.14 <span className="text-sm font-normal text-neutral-400">ms</span>
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
            <Zap size={12} className="text-white" /> Throughput
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white font-heading">
            8.4M <span className="text-sm font-normal text-neutral-400">ops/sec</span>
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck size={12} className="text-white" /> Memory Copy
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white font-heading">
            0 <span className="text-sm font-normal text-neutral-400">overhead</span>
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-neutral-500 uppercase tracking-widest">
            Uptime SLA
          </span>
          <span className="text-2xl md:text-3xl font-bold text-white font-heading">
            99.999%
          </span>
        </div>
      </div>
    </section>
  );
}
