"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [selectedIndustry, setSelectedIndustry] = useState("Medical");
  const [selectedTime, setSelectedTime] = useState("10:00 AM EST");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#000000", "#555555", "#888888", "#FFFFFF"],
    });
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setFormData({ name: "", email: "", company: "", notes: "" });
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white text-black border border-neutral-200 shadow-2xl rounded-none p-6 md:p-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
          data-cursor="CLOSE"
        >
          <X className="w-5 h-5 text-neutral-800" />
        </button>

        {step === "form" ? (
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                STRATEGIC CONSULTATION
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1">
                Book a Private Discovery Call
              </h3>
              <p className="text-sm text-neutral-600 mt-2">
                30 minutes with our Principal Directors to analyze your digital goals and architectural scope.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Industry Pill Selector */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                  Select Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Medical", "Restaurant", "Resort", "Law Firm"].map((ind) => (
                    <button
                      type="button"
                      key={ind}
                      onClick={() => setSelectedIndustry(ind)}
                      className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider border transition-all ${
                        selectedIndustry === ind
                          ? "bg-black text-white border-black"
                          : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-black"
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-2">
                  Available Slots
                </label>
                <div className="flex flex-wrap gap-2">
                  {["10:00 AM IST", "01:30 PM IST", "04:00 PM IST", "06:30 PM IST"].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border transition-all ${
                        selectedTime === time
                          ? "bg-black text-white border-black"
                          : "bg-white text-neutral-700 border-neutral-200 hover:border-black"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@company.com"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-neutral-500 mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                data-cursor="CONFIRM"
                className="w-full group inline-flex items-center justify-center gap-3 py-4 bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-all"
              >
                <span>Confirm Call Reservation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full text-black">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                RESERVATION CONFIRMED
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight mt-1">
                We're Excited to Meet You
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2">
                A calendar invitation for <strong className="text-black">{selectedTime}</strong> has been sent to <strong className="text-black">{formData.email || "your email"}</strong>. Our team is preparing your custom industry briefing.
              </p>
            </div>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 bg-black text-white text-xs font-mono tracking-widest uppercase hover:bg-neutral-800 transition-all"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
