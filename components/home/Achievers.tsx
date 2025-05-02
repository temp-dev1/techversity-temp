"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/models/Testimonial";

const Achievers = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  if (loading || testimonials.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-[#05264E] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
            Hear from Our Achievers
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Success stories from our students who transformed their careers through our programs.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <p className="text-lg font-bold text-white">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-gray-300">
                    {testimonials[activeIndex].role} at{" "}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="mb-4 text-[#0099FF]">
                  <Quote size={36} />
                </div>

                <p className="mb-6 text-lg text-gray-700">
                  "{testimonials[activeIndex].testimonial}"
                </p>

                <div className="mt-auto">
                  <p className="mb-1 hidden text-xl font-bold text-[#05264E] md:block">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="mb-2 hidden text-gray-600 md:block">
                    {testimonials[activeIndex].role} at{" "}
                    {testimonials[activeIndex].company}
                  </p>
                  <p className="text-sm font-medium text-[#FF5C00]">
                    {testimonials[activeIndex].course} Program
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            <button
              onClick={prevTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-[#0099FF] hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-[#0099FF] hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-6 bg-[#0099FF]"
                    : "bg-gray-400 hover:bg-[#0099FF]/70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievers;
