"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with fine pointer capabilities
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: "power2.out",
      });

      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach global listener for hover elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;

      if (interactive) {
        const text = interactive.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target.closest("a, button, input, select, textarea, [role='button']");
        if (isClickable) {
          setCursorText("");
          setIsHovered(true);
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible]);

  return (
    <>
      {/* Primary Dot Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-black pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Outer Follower Badge */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center rounded-full ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? cursorText
              ? "w-20 h-20 bg-black text-white text-[10px] font-bold tracking-widest uppercase scale-110 shadow-2xl"
              : "w-12 h-12 bg-black/10 border border-black/30 backdrop-blur-xs scale-125"
            : "w-8 h-8 border border-black/20"
        }`}
      >
        {cursorText && (
          <span className="animate-fade-in text-center px-1 font-mono leading-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
