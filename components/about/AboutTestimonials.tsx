import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer at Google",
    image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    testimonial: "The practical approach and industry-aligned curriculum at TechVersity helped me land my dream job at Google.",
  },
  {
    name: "Priya Patel",
    role: "Data Scientist at Microsoft",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    testimonial: "The mentorship and guidance I received were invaluable in shaping my career in data science.",
  },
];

const AboutTestimonials = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#05264E] text-center mb-12">
          What Our Alumni Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <Quote className="text-[#0099FF] mb-4" size={36} />
              <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#05264E]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;