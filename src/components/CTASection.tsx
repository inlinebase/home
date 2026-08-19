"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, Phone, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".cta-title-line", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 sm:px-8 lg:px-12 bg-white text-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest text-zinc-600 mb-6">
          <span className="h-2 w-2 bg-black" />
          <span>06 // INITIATE DIALOGUE</span>
        </div>

        <h2 className="font-display font-black clamp-hero tracking-tight uppercase leading-none text-black select-none">
          <div className="overflow-hidden py-1">
            <span className="cta-title-line block">HAVE A PROJECT</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="cta-title-line block text-zinc-500">IN MIND?</span>
          </div>
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-t border-zinc-200 pt-10">
          <p className="lg:col-span-6 text-lg sm:text-2xl font-light text-zinc-800 leading-relaxed">
            We are currently scheduling engineering capacity for Q3 &amp; Q4. Let's discuss your product roadmap, performance requirements, or brand transformation.
          </p>

          <div className="lg:col-span-6 flex flex-wrap gap-4 lg:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-9 py-5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-zinc-800 hover:scale-[1.03]"
              data-cursor="TALK"
            >
              <span>Schedule Strategic Call</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-transparent px-8 py-5 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-black/5"
              data-cursor="EMAIL"
            >
              <Mail className="h-4 w-4" />
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
