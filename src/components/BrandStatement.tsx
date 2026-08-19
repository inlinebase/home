"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATEMENT_TEXT =
  "WE ARCHITECT HIGH-PERFORMANCE DIGITAL INFRASTRUCTURE AND BESPOKE ENTERPRISE PLATFORMS THAT REDEFINE INDUSTRY STANDARDS, ELIMINATE TECHNICAL FRICTION, AND POWER GLOBAL MARKET LEADERS.";

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const words = textRef.current?.querySelectorAll(".statement-word");
    if (!words || words.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          color: "rgba(255, 255, 255, 0.15)",
        },
        {
          color: "rgba(255, 255, 255, 1)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 45%",
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const wordList = STATEMENT_TEXT.split(" ");

  return (
    <section
      id="brand-statement"
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 sm:px-8 lg:px-12 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-2 w-2 bg-white rounded-none" />
          <span className="font-mono-code text-xs uppercase tracking-widest text-zinc-500">
            // Core Manifesto
          </span>
        </div>

        <p
          ref={textRef}
          className="font-display font-extrabold clamp-statement tracking-tight leading-none uppercase text-zinc-800 select-none"
        >
          {wordList.map((word, i) => (
            <span key={i} className="statement-word inline-block mr-[0.3em] transition-colors">
              {word}
            </span>
          ))}
        </p>

        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-wrap justify-between items-center text-xs font-mono-code text-zinc-500">
          <span>INLINEBASE LABS // NY • LDN • TYO</span>
          <span>EST. 2024</span>
        </div>
      </div>
    </section>
  );
}
