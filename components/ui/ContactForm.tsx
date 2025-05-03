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

  // Handle clicking outside the form
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
      <div
        ref={formRef}
        className="relative w-full max-w-3xl rounded-3xl bg-white p-8 shadow-2xl md:p-10"
      >
        {/* Modern Close Button (partially outside) */}
<button
  onClick={onClose}
  className="absolute z-10 h-10 w-10 rounded-full bg-white shadow-lg hover:bg-gray-100 flex items-center justify-center"
  style={{
    top: '-20px',
    right: '-20px',
  }}
  aria-label="Close contact form"
>
  <X className="h-5 w-5 text-gray-600" />
</button>


        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#05264E]">Get in Touch</h2>
          <p className="text-gray-600">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
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
              className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
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
              className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full rounded-xl border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full rounded-xl bg-[#0099FF] py-5 text-lg font-semibold text-white hover:bg-[#007acc]"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            You can also reach us at{" "}
            <a href="tel:+919340333374" className="font-semibold text-[#0099FF]">
              +91 93403 33374
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
