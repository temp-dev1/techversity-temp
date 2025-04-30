"use client";

import React, { useState } from "react";
import { Book, Users, Briefcase, GraduationCap } from "lucide-react";

const features = [
  {
    id: "edu-learn",
    title: "Edu-Learn",
    icon: Book,
    description: "Learn from industry experts",
    details: [
      "Access to 500+ courses",
      "HD quality video content",
      "Downloadable resources",
      "Industry-validated curriculum"
    ],
    image: "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg"
  },
  {
    id: "edu-mentorship",
    title: "Edu-Mentorship",
    icon: Users,
    description: "1:1 mentorship program",
    details: [
      "Weekly mentorship sessions",
      "Career guidance",
      "Project reviews",
      "Interview preparation"
    ],
    image: "https://images.pexels.com/photos/3771083/pexels-photo-3771083.jpeg"
  },
  {
    id: "edu-skills",
    title: "Edu-Skills",
    icon: GraduationCap,
    description: "Practical skill development",
    details: [
      "Hands-on projects",
      "Real-world case studies",
      "Industry tools training",
      "Skill assessments"
    ],
    image: "https://images.pexels.com/photos/3771045/pexels-photo-3771045.jpeg"
  },
  {
    id: "edu-career",
    title: "Edu-Career",
    icon: Briefcase,
    description: "Career support",
    details: [
      "Job placement assistance",
      "Resume building",
      "Mock interviews",
      "Industry connections"
    ],
    image: "https://images.pexels.com/photos/3771093/pexels-photo-3771093.jpeg"
  }
];

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1a1a1a] md:text-4xl">
          Why Choose Us?
        </h2>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2196F3] to-[#9C27B0] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column - Features */}
            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature)}
                    className={`w-full transition-all ${
                      activeFeature.id === feature.id
                        ? "translate-x-2"
                        : "hover:translate-x-2"
                    }`}
                  >
                    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-lg">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        activeFeature.id === feature.id
                          ? "bg-[#2196F3] text-white"
                          : "bg-[#E3F2FD] text-[#2196F3]"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-lg font-semibold text-[#1a1a1a]">
                        {feature.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column - Image and Details */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className="h-[300px] w-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Feature Details */}
              <div className="mt-8 space-y-4">
                {activeFeature.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M20 6L9 17L4 12" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;