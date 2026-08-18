"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "default" | "compact" | "footer";
  animated?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "default",
  onClick,
}) => {
  const isCompact = variant === "compact";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center group focus:outline-none transition-transform duration-300 ${className}`}
      aria-label="INLINEBASE - Home"
    >
      <svg
        viewBox="0 0 520 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-auto transition-all duration-500 ease-out ${
          isCompact ? "w-36 md:w-44" : "w-48 md:w-64"
        }`}
      >
        {/* I */}
        <line
          x1="12"
          y1="12"
          x2="12"
          y2="48"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* N */}
        <path
          d="M 40 48 V 16 C 40 12 55 12 60 22 L 72 48 V 12"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* L */}
        <path
          d="M 100 12 V 48 H 122"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* I */}
        <line
          x1="145"
          y1="12"
          x2="145"
          y2="48"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* N */}
        <path
          d="M 172 48 V 16 C 172 12 187 12 192 22 L 204 48 V 12"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* E (Three horizontal lines) */}
        <g className="transition-transform duration-300 group-hover:translate-x-0.5">
          <line
            x1="230"
            y1="16"
            x2="265"
            y2="16"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="230"
            y1="30"
            x2="265"
            y2="30"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="230"
            y1="44"
            x2="265"
            y2="44"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>

        {/* B */}
        <path
          d="M 295 12 H 318 C 326 12 331 16 331 22 C 331 28 325 30 318 30 H 295 V 12 Z M 295 30 H 320 C 328 30 334 34 334 40 C 334 46 327 48 318 48 H 295 V 30 Z"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* A (Apex / Caret shape Λ) */}
        <path
          d="M 360 48 L 382 12 L 404 48"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* S */}
        <path
          d="M 452 18 C 452 14 445 12 436 12 C 427 12 422 16 422 22 C 422 36 454 26 454 38 C 454 44 446 48 436 48 C 425 48 420 44 420 39"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* E (Three horizontal lines) */}
        <g className="transition-transform duration-300 group-hover:translate-x-0.5">
          <line
            x1="480"
            y1="16"
            x2="515"
            y2="16"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="480"
            y1="30"
            x2="515"
            y2="30"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="480"
            y1="44"
            x2="515"
            y2="44"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </g>

        {/* AGENCY Sub-title line below INLINEBASE */}
        <g stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
          {/* A (Apex caret Λ shape) */}
          <path d="M 72 76 L 80 62 L 88 76" />

          {/* G */}
          <path d="M 161 65 C 158 62 152 62 147 65 C 143 69 143 73 147 76 C 152 79 158 78 161 74 V 70 H 153" />

          {/* E (Three horizontal lines matching signature E) */}
          <g className="transition-transform duration-300 group-hover:translate-x-0.5">
            <line x1="218" y1="63" x2="234" y2="63" />
            <line x1="218" y1="69" x2="234" y2="69" />
            <line x1="218" y1="75" x2="234" y2="75" />
          </g>

          {/* N */}
          <path d="M 291 76 V 64 C 291 62 297 62 299 66 L 304 76 V 62" />

          {/* C */}
          <path d="M 380 65 C 377 62 371 62 367 65 C 363 69 363 73 367 76 C 371 79 377 79 380 76" />

          {/* Y */}
          <path d="M 437 62 L 445 69 L 453 62 M 445 69 V 76" />
        </g>
      </svg>
    </Link>
  );
};
