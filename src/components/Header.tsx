"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Terminal, Menu, X } from "lucide-react";

export default function Header() {
  const [time, setTime] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().substring(11, 19) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white text-black font-bold flex items-center justify-center font-ui text-sm tracking-tighter transition-transform group-hover:rotate-45">
            ib
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-white uppercase">
            inlinebase
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-ui text-sm text-neutral-400">
          <a href="#capabilities" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#architecture" className="hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#benchmarks" className="hover:text-white transition-colors">
            Benchmarks
          </a>
          <a href="#manifesto" className="hover:text-white transition-colors">
            Manifesto
          </a>
        </nav>

        {/* Right Status & Action */}
        <div className="hidden md:flex items-center gap-6">
          <div className="status-badge">
            <span className="pulse-dot"></span>
            <span>SYSTEMS ONLINE</span>
            {time && <span className="text-neutral-500 font-mono text-[10px] ml-1">({time})</span>}
          </div>

          <a href="#contact" className="btn-primary text-xs !py-2.5 !px-5">
            Deploy Now
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 border border-neutral-800"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 px-6 py-6 flex flex-col gap-5 font-ui">
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-300 hover:text-white"
          >
            Capabilities
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-300 hover:text-white"
          >
            Architecture
          </a>
          <a
            href="#benchmarks"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-300 hover:text-white"
          >
            Benchmarks
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg text-neutral-300 hover:text-white"
          >
            Manifesto
          </a>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-4">
            <div className="status-badge justify-center">
              <span className="pulse-dot"></span>
              <span>SYSTEMS ONLINE</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-center justify-center !py-3"
            >
              Deploy Now <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
