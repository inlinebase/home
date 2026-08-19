"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices (mobile & tablets)
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let initialized = false;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!initialized) {
        ringX = mouseX;
        ringY = mouseY;
        initialized = true;
      }

      // Check target hover context
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        setIsHovered(true);
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        const isClickable = target?.closest("a, button, input, textarea, select, [role='button']");
        if (isClickable) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const render = () => {
      if (initialized) {
        // Immediate dot tracking centered at mouseX, mouseY
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
          dotRef.current.style.opacity = "1";
        }

        // Smooth tight LERP ring tracking centered at ringX, ringY
        ringX += (mouseX - ringX) * 0.35;
        ringY += (mouseY - ringY) * 0.35;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
          ringRef.current.style.opacity = "1";
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Core Dot Pointer */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 rounded-full bg-white opacity-0 transition-opacity duration-200 mix-blend-difference"
      />

      {/* Trailing Outer Ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-white/60 opacity-0 transition-all duration-200 ease-out mix-blend-difference ${
          isHovered
            ? "h-14 w-14 bg-white text-black border-transparent scale-100"
            : "h-8 w-8 bg-transparent text-transparent scale-90"
        }`}
      >
        {cursorText && (
          <span className="font-mono-code text-[9px] font-bold tracking-widest uppercase text-black">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
