"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, ExternalLink, Mail, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas ambient geometric grid effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = Math.min(Math.floor(width / 24), 45);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const mdx = p1.x - mouseX;
        const mdy = p1.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - mdist / 180)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // GSAP Entrance Reveal Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        delay: 0.1,
      })
        .from(
          ".hero-line",
          {
            y: 80,
            opacity: 0,
            stagger: 0.15,
            duration: 1.4,
          },
          "-=0.8"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 20,
            duration: 1.0,
          },
          "-=0.9"
        )
        .from(
          ".hero-cta-btn",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=0.7"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-32 pb-16 sm:pb-12 px-4 sm:px-8 lg:px-12 bg-[#050505] bg-grid-lines bg-noise overflow-hidden"
    >
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 opacity-70" />

      {/* Top Status Badge - Centered on Mobile */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-center sm:justify-between items-center mb-6 sm:mb-8">
        <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="font-mono-code text-[11px] sm:text-xs font-semibold tracking-widest text-zinc-200 uppercase">
            WEBSITES • MOBILE APPS • SAAS
          </span>
        </div>

        <div className="hero-badge hidden sm:flex items-center gap-3 font-mono-code text-xs text-zinc-400">
          <span>Headquarters: {COMPANY_INFO.location}</span>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto text-center sm:text-left">
        <h1
          ref={headlineRef}
          className="font-display font-black clamp-hero text-white tracking-tight uppercase select-none"
        >
          <div className="overflow-hidden py-0.5">
            <span className="hero-line block text-white">WE TURN</span>
          </div>
          <div className="overflow-hidden py-0.5">
            <span className="hero-line block text-zinc-400">IDEAS INTO</span>
          </div>
          <div className="overflow-hidden py-0.5">
            <span className="hero-line block text-white">PRODUCTS.</span>
          </div>
        </h1>

        {/* Supporting Message & Touch Action CTAs */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          <p className="hero-desc lg:col-span-7 text-sm sm:text-2xl text-zinc-300 font-light leading-relaxed text-center sm:text-left">
            {COMPANY_INFO.supportingText}
          </p>

          {/* Action CTAs Layout: Structured touch targets on mobile */}
          <div className="lg:col-span-5 flex flex-col gap-3 w-full lg:items-end">
            {/* Primary CTA - Full Width on Mobile */}
            <a
              href="#contact"
              className="hero-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-zinc-200 shadow-xl"
              data-cursor="TALK"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Email & Phone - 2 Column Grid on Mobile */}
            <div className="grid grid-cols-2 gap-2.5 w-full sm:w-auto sm:flex sm:gap-3">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-xs font-mono-code uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                data-cursor="EMAIL"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                <span>Email Us</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="hero-cta-btn inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-xs font-mono-code uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                data-cursor="CALL"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span>Call Us</span>
              </a>
            </div>

            {/* Agency Portal Button - Full Width on Mobile */}
            <a
              href={COMPANY_INFO.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-5 py-3 text-xs font-mono-code uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white transition-colors"
              data-cursor="AGENCY"
            >
              <span>Visit Agency Website</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bar / Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full border-t border-white/10 pt-4 sm:pt-5 mt-6 sm:mt-12 flex items-center justify-between font-mono-code text-xs text-zinc-500">
        <div className="flex items-center gap-2 sm:gap-6 truncate">
          <span className="text-zinc-400 text-[10px] sm:text-xs truncate">{COMPANY_INFO.name}</span>
        </div>

        <a
          href="#showreel"
          className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-[10px] sm:text-xs shrink-0"
        >
          <span>Watch Showreel</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
