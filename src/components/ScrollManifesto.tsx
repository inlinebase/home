"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const manifestoText = `Most databases are built on decades-old abstractions designed for disk-bound storage and blocking threads. INLINEBASE discards legacy assumptions. We architected a memory-native execution layer where queries run directly inside memory buffers at hardware limits. No translation overhead. No unnecessary allocations. Pure deterministic speed for modern intelligent applications.`;

  useEffect(() => {
    // Basic GSAP stagger reveal for text words
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.15, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = manifestoText.split(" ");

  return (
    <section id="manifesto" ref={containerRef} className="py-32 bg-[#050505] border-b border-[#1f1f1f]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="status-badge mb-8">
            <span>ENGINEERING MANIFESTO</span>
          </div>

          {/* Giant Manifesto Text */}
          <p className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight text-white">
            {words.map((word, index) => {
              const isHighlight = word.includes("INLINEBASE") || word.includes("Pure") || word.includes("deterministic");
              return (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) wordsRef.current[index] = el;
                  }}
                  className={`inline-block mr-[0.25em] mb-[0.1em] transition-all duration-300 ${
                    isHighlight ? "text-white underline decoration-neutral-600 underline-offset-8" : "text-neutral-300"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between font-ui text-sm text-neutral-400 gap-4">
            <div>
              <span className="text-white font-bold">INLINEBASE PHILOSOPHY</span> — Zero compromise on latency.
            </div>
            <div className="font-mono text-xs text-neutral-500">
              BUILD: v2.4.0-AWS-READY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
