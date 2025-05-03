"use client";

import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
        onClose();
      } else {
        throw new Error("Failed to submit query");
      }
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Failed to submit query. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-3xl p-4">
        <div
          ref={formRef}
          className="relative max-h-[90vh] overflow-y-auto rounded-2xl bg-white px-4 py-6 shadow-xl sm:px-6 md:px-10 md:py-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-[-16px] top-[-16px] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100"
            aria-label="Close contact form"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>

          {/* Header */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#05264E] sm:text-3xl">Get in Touch</h2>
            <p className="mt-1 text-sm text-gray-600">We’ll get back to you shortly.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full rounded-md border border-gray-300 p-3 text-sm focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className="sm:col-span-2">
              <Button
                type="submit"
                className="w-full rounded-md bg-[#0099FF] py-3 text-sm font-semibold text-white hover:bg-[#007acc]"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Or call us at{" "}
            <a href="tel:+919340333374" className="font-medium text-[#0099FF]">
              +91 93403 33374
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
