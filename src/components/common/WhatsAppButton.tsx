"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "917008720822";
  const defaultMessage = encodeURIComponent(
    "Hello INLINEBASE, I would like to discuss a website project for my business."
  );
  // Universal WhatsApp API deep link that opens WhatsApp app directly
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="WHATSAPP"
      aria-label="Chat on WhatsApp with INLINEBASE"
      className="fixed bottom-6 right-6 z-[9990] group flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20 select-none cursor-pointer pointer-events-auto"
    >
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-white/30 animate-ping pointer-events-none" />
      </div>
      <span className="hidden sm:inline-block text-xs font-mono font-bold tracking-wider uppercase text-white pr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
};
