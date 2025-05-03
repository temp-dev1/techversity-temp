"use client";

import React, { useState } from "react";
import { X as XIcon, Star, Check, Clock, Book, Users, Award } from 'lucide-react';
import { Course } from "@/models/Course";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface CourseDetailsPopupProps {
  course: Course;
  onClose: () => void;
}

const CourseDetailsPopup: React.FC<CourseDetailsPopupProps> = ({ course, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          courseId: course._id,
          courseTitle: course.title
        }),
      });

      if (response.ok) {
        alert('Thank you for your interest! We will contact you soon.');
        onClose();
      } else {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit enquiry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "mentors", label: "Mentors" },
    { id: "fees", label: "Program Fees" }
  ];

  if (!course) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-6xl rounded-2xl bg-white p-8">
          <Skeleton className="h-[300px] w-full rounded-xl" />
          <div className="mt-8 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-500 backdrop-blur-sm transition-all hover:bg-white hover:text-gray-700"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="grid md:grid-cols-3">
          {/* Left Section - Course Details */}
          <div className="col-span-2 p-6 md:p-8">
            <div className="relative mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="h-[300px] w-full rounded-xl object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="mb-2 inline-block rounded-full bg-[#FF5C00] px-3 py-1 text-sm font-semibold text-white">
                  {course.category}
                </span>
                <h1 className="text-2xl font-bold text-white md:text-3xl">
                  {course.title}
                </h1>
              </div>
            </div>

            {/* Course Stats */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <Clock className="h-5 w-5 text-[#0099FF]" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <Book className="h-5 w-5 text-[#FF5C00]" />
                <div>
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-semibold">{course.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <Users className="h-5 w-5 text-[#0099FF]" />
                <div>
                  <p className="text-sm text-gray-500">Enrolled</p>
                  <p className="font-semibold">{course.reviews}+ Students</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                <Award className="h-5 w-5 text-[#FF5C00]" />
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-[#FF5C00] text-[#FF5C00]" />
                    <span className="ml-1 font-semibold">{course.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mb-6 flex space-x-4 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`border-b-2 pb-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-[#0099FF] text-[#0099FF]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                      Course Description
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                      What you'll learn
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {course.learningOutcomes?.map((outcome, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 shrink-0 text-[#0099FF]" />
                          <span className="text-gray-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                      Career Opportunities
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {course.careerOpportunities?.map((opportunity, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 shrink-0 text-[#0099FF]" />
                          <span className="text-gray-600">{opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                      Who is this course for?
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {course.targetAudience?.map((audience, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 shrink-0 text-[#0099FF]" />
                          <span className="text-gray-600">{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="space-y-6">
                  <div className="rounded-lg border">
                    {course.features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-4 ${
                          index !== course.features.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <Check className="h-5 w-5 text-[#0099FF]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "mentors" && (
                <div className="grid gap-6 sm:grid-cols-2">
                  {course.mentors?.map((mentor, index) => (
                    <div
                      key={index}
                      className="rounded-lg border p-4 transition-all hover:shadow-md"
                    >
                      <div className="mb-4 flex items-center gap-4">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-[#05264E]">
                            {mentor.name}
                          </h4>
                          <p className="text-sm text-gray-500">{mentor.role}</p>
                          <div className="mt-1 h-6">
                            <img
                              src={mentor.companyLogo}
                              alt={mentor.company}
                              className="h-full w-auto object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {mentor.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "fees" && (
                <div className="grid gap-6 sm:grid-cols-3">
                  {course.programFees?.map((fee, index) => (
                    <div
                      key={index}
                      className="rounded-lg border p-6 transition-all hover:shadow-md"
                    >
                      <h4 className="mb-2 text-lg font-semibold">{fee.type}</h4>
                      <p className="mb-4 text-2xl font-bold text-[#0099FF]">
                        ₹{fee.price.toLocaleString()}
                      </p>
                      <ul className="space-y-2">
                        {fee.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-sm">
                            {feature.included ? (
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                            ) : (
                              <XIcon className="mr-2 h-4 w-4 text-red-500" />
                            )}
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Enquiry Form */}
          <div className="border-l bg-gray-50 p-6 md:p-8">
            <div className="sticky top-8">
              <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#05264E]">
                    ₹{course.discountedPrice.toLocaleString()}
                  </span>
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ₹{course.price.toLocaleString()}
                  </span>
                  <span className="ml-2 rounded-full bg-[#FF5C00]/10 px-3 py-1 text-sm font-medium text-[#FF5C00]">
                    {Math.round(
                      ((course.price - course.discountedPrice) / course.price) * 100
                    )}
                    % OFF
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Next Batch Starting: {course.nextBatch || "Soon"}
                </p>
              </div>

              <h3 className="mb-2 text-center text-xl font-bold text-[#05264E]">
                Get Course Details
              </h3>
              <p className="mb-6 text-center text-sm text-gray-600">
                Fill the form below and our course advisor will get in touch with you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="College Name"
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
                    value={formData.college}
                    onChange={(e) =>
                      setFormData({ ...formData, college: e.target.value })
                    }
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    required
                    checked={formData.acceptTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, acceptTerms: e.target.checked })
                    }
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    By continuing, you accept our Terms of Use and Privacy Policy
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0099FF] py-6 text-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>

              <div className="mt-6 rounded-lg bg-[#06315F] p-4 text-center text-white">
                <p className="mb-2 text-sm">Need help? Call us at</p>
                <a
                  href="tel:+919876543210"
                  className="text-xl font-bold text-[#0099FF]"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPopup;
