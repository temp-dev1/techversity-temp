"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-8">
      <div className="relative w-full max-h-[90vh] max-w-md overflow-y-auto rounded-2xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-[#05264E]">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0099FF] py-6 text-lg"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              You can also reach us at{" "}
              <a
                href="tel:+91340333374"
                className="font-semibold text-[#0099FF]"
              >
                +91 98765 43210
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
