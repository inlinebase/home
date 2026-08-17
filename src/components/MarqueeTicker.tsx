"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MarqueeTicker() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line 1: Leftward infinite marquee
      if (marquee1Ref.current) {
        gsap.to(marquee1Ref.current, {
          xPercent: -50,
          ease: "none",
          duration: 25,
          repeat: -1,
        });
      }

      // Line 2: Rightward infinite marquee
      if (marquee2Ref.current) {
        gsap.fromTo(
          marquee2Ref.current,
          { xPercent: -50 },
          {
            xPercent: 0,
            ease: "none",
            duration: 25,
            repeat: -1,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    "INLINEBASE",
    "SUB-MS PRECISION",
    "ZERO COPY MEMORY",
    "REAL-TIME INFRASTRUCTURE",
    "HIGH THROUGHPUT",
    "DETERMINISTIC INDEXING",
  ];

  return (
    <section className="py-16 bg-[#030303] overflow-hidden border-b border-[#1f1f1f] select-none">
      {/* Ticker Row 1: Solid Typography */}
      <div className="flex whitespace-nowrap overflow-hidden py-3">
        <div ref={marquee1Ref} className="flex gap-12 whitespace-nowrap shrink-0">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-12">
              <span className="font-heading font-extrabold text-5xl md:text-8xl tracking-tight text-white uppercase">
                {item}
              </span>
              <span className="w-4 h-4 rounded-full bg-white/20"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker Row 2: Outlined Giant Typography */}
      <div className="flex whitespace-nowrap overflow-hidden py-3 mt-2">
        <div ref={marquee2Ref} className="flex gap-12 whitespace-nowrap shrink-0">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-12">
              <span className="giant-title-outlined text-5xl md:text-8xl">
                {item}
              </span>
              <span className="text-2xl text-neutral-700">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
