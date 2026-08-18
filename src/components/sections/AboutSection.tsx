"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [happyCount, setHappyCount] = useState(0);
  const [industriesCount, setIndustriesCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 70%",
        onEnter: () => {
          if (hasAnimated) return;
          setHasAnimated(true);

          // Counter Animations
          gsap.to(
            { val: 0 },
            {
              val: 150,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setProjectsCount(Math.floor(this.targets()[0].val));
              },
            }
          );

          gsap.to(
            { val: 0 },
            {
              val: 10,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setYearsCount(Math.floor(this.targets()[0].val));
              },
            }
          );

          gsap.to(
            { val: 0 },
            {
              val: 99,
              duration: 2,
              ease: "power2.out",
              onUpdate: function () {
                setHappyCount(Math.floor(this.targets()[0].val));
              },
            }
          );

          gsap.to(
            { val: 0 },
            {
              val: 4,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: function () {
                setIndustriesCount(Math.floor(this.targets()[0].val));
              },
            }
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [hasAnimated]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-28 px-6 md:px-12 bg-neutral-950 text-white overflow-hidden border-t border-neutral-900"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Large Typography Philosophy */}
        <div className="space-y-8 max-w-5xl">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500">
            AGENCY MANIFESTO
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.1]">
            We build for organizations where digital presence is <strong className="font-extrabold text-white">the definitive standard of trust</strong>.
          </h2>
          <p className="text-base sm:text-xl text-neutral-400 font-light leading-relaxed max-w-3xl">
            INLINEBASE operates at the intersection of minimalist luxury design and technical precision. Inspired by the relentless craftsmanship of Baunfire, we eliminate clutter to let your brand's core authority shine through world-class animations, typography, and responsive performance.
          </p>
        </div>

        {/* Counter Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-900">
          {/* Stat 1 */}
          <div className="space-y-2">
            <div className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-mono">
              {projectsCount}+
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Projects Completed
            </div>
            <p className="text-[11px] text-neutral-500 font-sans">
              Across Medical, Dining, Resorts & Law.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="space-y-2">
            <div className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-mono">
              {yearsCount}+
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Years Experience
            </div>
            <p className="text-[11px] text-neutral-500 font-sans">
              Dedicated digital engineering mastery.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="space-y-2">
            <div className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-mono">
              {happyCount}%
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Client Satisfaction
            </div>
            <p className="text-[11px] text-neutral-500 font-sans">
              Long-term retainer & SLA partnerships.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="space-y-2">
            <div className="text-5xl sm:text-7xl font-extrabold tracking-tighter text-white font-mono">
              0{industriesCount}
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              Core Industries
            </div>
            <p className="text-[11px] text-neutral-500 font-sans">
              Deep specialized domain expertise.
            </p>
          </div>
        </div>

        {/* Read More Link */}
        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-neutral-300 hover:text-white transition-colors border-b border-neutral-700 pb-1"
          >
            <span>Learn More About Our Team & Culture</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
