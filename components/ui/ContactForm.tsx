"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-8">
      <div className="relative w-full max-w-[400px] rounded-xl bg-white p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-500 shadow-lg transition-colors hover:text-gray-700"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-dark">Talk to Our Experts</h3>
          <p className="mt-2 text-sm text-gray-600">Fill in your details and we'll get back to you shortly</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="form-input"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="course" className="form-label">
              Interested Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select a course</option>
              <option value="data-science">Data Science & ML</option>
              <option value="web-development">Web Development</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="cloud-computing">Cloud Computing</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="artificial-intelligence">AI & Deep Learning</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your learning goals"
              rows={3}
              className="form-input resize-none"
            ></textarea>
          </div>
          
          <Button type="submit" variant="blue" className="mt-6 w-full py-6 text-base font-semibold">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;