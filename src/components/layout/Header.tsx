"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/common/Logo";

interface HeaderProps {
  onOpenBookCall: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Determine if the current page has a dark hero at top
  const isDarkPage =
    pathname.startsWith("/portfolio") ||
    pathname.startsWith("/services") ||
    pathname.startsWith("/about");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Scrolled state threshold
      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Smooth Hide/Show logic on scroll direction
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling DOWN -> Header APPEARS smoothly
          setIsVisible(true);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling UP -> Header DISAPPEARS smoothly
          setIsVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;

      // 3. Dynamic Dark/White Section Detection under header
      if (typeof window !== "undefined") {
        const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
        const underlying = elements.find(
          (el) => !headerRef.current?.contains(el) && el !== headerRef.current
        );

        if (underlying) {
          const darkParent = underlying.closest(
            '.bg-black, .bg-neutral-900, .bg-neutral-950, [data-theme="dark"], footer'
          );
          if (darkParent) {
            setIsDarkSection(true);
            return;
          }

          // Check computed background color lightness
          const bg = window.getComputedStyle(underlying).backgroundColor;
          const match = bg.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (match) {
            const r = parseInt(match[1], 10);
            const g = parseInt(match[2], 10);
            const b = parseInt(match[3], 10);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setIsDarkSection(brightness < 128);
          } else {
            setIsDarkSection(false);
          }
        } else {
          setIsDarkSection(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const navLinks = [
    { name: "Home", href: "/", sectionId: "" },
    { name: "Services", href: "/#services", sectionId: "services" },
    { name: "Industries", href: "/#industries", sectionId: "industries" },
    { name: "Portfolio", href: "/#portfolio", sectionId: "portfolio" },
    { name: "Process", href: "/#process", sectionId: "process" },
    { name: "About", href: "/#about", sectionId: "about" },
    { name: "Contact", href: "/#contact", sectionId: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    setIsMobileOpen(false);
    if (pathname === "/" && (link.name === "Home" || !link.sectionId)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (pathname === "/" && link.sectionId) {
      e.preventDefault();
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setIsMobileOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMobileMenu = (e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMobileOpen((prev) => !prev);
  };

  // Contrast text color for dark sections or dark hero pages
  const isWhiteTheme = isDarkSection || (isDarkPage && !isScrolled);

  return (
    <>
      <header
        ref={headerRef}
        data-lenis-prevent
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ease-out pointer-events-auto ${
          !isVisible && !isMobileOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          isScrolled
            ? isDarkSection
              ? "py-3 bg-black/90 backdrop-blur-md border-b border-neutral-800 shadow-sm text-white"
              : "py-3 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xs text-black"
            : isWhiteTheme
            ? "py-5 md:py-8 bg-transparent text-white"
            : "py-5 md:py-8 bg-transparent text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex items-center justify-between">
          {/* Logo Container */}
          <div className="flex items-center">
            <Logo
              variant={isScrolled ? "compact" : "default"}
              onClick={handleLogoClick}
              className={`transition-colors duration-300 ${
                isWhiteTheme ? "text-white" : "text-black"
              }`}
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative text-xs font-mono tracking-widest uppercase transition-colors py-1 group ${
                    isWhiteTheme
                      ? "text-neutral-300 hover:text-white"
                      : "text-neutral-600 hover:text-black"
                  }`}
                >
                  <span>{link.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                      isWhiteTheme ? "bg-white" : "bg-black"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenBookCall}
              data-cursor="BOOK"
              className={`hidden sm:inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 px-5 py-2.5 ${
                isWhiteTheme
                  ? "bg-white text-black hover:bg-neutral-200"
                  : "bg-black text-white hover:bg-neutral-900 shadow-md"
              }`}
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              onTouchEnd={(e) => {
                e.preventDefault();
                toggleMobileMenu(e);
              }}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileOpen}
              data-lenis-prevent
              className={`lg:hidden relative z-[100000] p-3 -mr-2 cursor-pointer pointer-events-auto select-none touch-manipulation focus:outline-none transition-colors duration-300 ${
                isMobileOpen || isWhiteTheme ? "text-white" : "text-black"
              }`}
            >
              {isMobileOpen ? (
                <X className="w-7 h-7 text-white" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Menu */}
      {isMobileOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[99999] bg-black text-white flex flex-col justify-between p-8 md:p-12 overflow-y-auto lg:hidden animate-fade-in pointer-events-auto"
        >
          {/* Top Bar inside Menu Drawer */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6">
            <Logo variant="compact" onClick={handleLogoClick} className="text-white" />
            <button
              type="button"
              onClick={toggleMobileMenu}
              onTouchEnd={(e) => {
                e.preventDefault();
                toggleMobileMenu(e);
              }}
              className="p-3 text-white focus:outline-none cursor-pointer pointer-events-auto"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-white" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-6 my-auto pt-8 pb-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-3xl font-extrabold tracking-tight text-neutral-200 hover:text-white transition-colors py-2"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Bottom Action CTA */}
          <div className="space-y-4 pt-6 border-t border-neutral-800">
            <button
              type="button"
              onClick={() => {
                setIsMobileOpen(false);
                onOpenBookCall();
              }}
              className="w-full py-4 bg-white text-black text-xs font-mono tracking-widest uppercase font-bold text-center block hover:bg-neutral-200 transition-colors"
            >
              Book a Call
            </button>
            <div className="text-[10px] font-mono text-neutral-500 uppercase text-center">
              INLINEBASE DIGITAL AGENCY © 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
};
