"use client";

import React, { useState } from "react";
import { X, Star, Check, X as XIcon } from "lucide-react";
import { Course } from "@/models/Course";
import { Button } from "@/components/ui/button";

interface CourseDetailsPopupProps {
  course: Course;
  onClose: () => void;
}

const CourseDetailsPopup: React.FC<CourseDetailsPopupProps> = ({ course, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    acceptTerms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-500 hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid md:grid-cols-3">
          {/* Left Section - Course Details */}
          <div className="col-span-2 p-6 md:p-8">
            <div className="mb-8">
              <img
                src={course.image}
                alt={course.title}
                className="h-[300px] w-full rounded-xl object-cover"
              />
            </div>

            {/* Navigation Tabs */}
            <div className="mb-6 flex space-x-4 border-b">
              {["overview", "learn", "careers", "target"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 pb-2 text-sm font-medium ${
                    activeTab === tab
                      ? "border-[#0099FF] text-[#0099FF]"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === "overview" && (
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-[#05264E]">
                    {course.title}
                  </h2>
                  <p className="text-gray-600">{course.description}</p>

                  {/* Course Stats */}
                  <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{course.duration}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">Level</p>
                      <p className="font-semibold">{course.level}</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">Rating</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-[#FF5C00] text-[#FF5C00]" />
                        <span className="ml-1 font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <p className="text-sm text-gray-500">Reviews</p>
                      <p className="font-semibold">{course.reviews}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "learn" && (
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                    What you'll learn
                  </h3>
                  <ul className="space-y-3">
                    {course.learningOutcomes?.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-[#0099FF]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "careers" && (
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                    Career Opportunities
                  </h3>
                  <ul className="space-y-3">
                    {course.careerOpportunities?.map((opportunity, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-[#0099FF]" />
                        <span>{opportunity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "target" && (
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-[#05264E]">
                    Who is this course for?
                  </h3>
                  <ul className="space-y-3">
                    {course.targetAudience?.map((audience, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-[#0099FF]" />
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Program Fees */}
            <div>
              <h3 className="mb-6 text-xl font-semibold text-[#05264E]">
                Program Fees
              </h3>
              <div className="grid gap-6 sm:grid-cols-3">
                {course.programFees?.map((fee, index) => (
                  <div
                    key={index}
                    className="rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <h4 className="mb-2 text-lg font-semibold">{fee.type}</h4>
                    <p className="mb-4 text-2xl font-bold text-[#0099FF]">
                      ₹{fee.price}
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
            </div>
          </div>

          {/* Right Section - Enquiry Form */}
          <div className="border-l bg-gray-50 p-6 md:p-8">
            <div className="sticky top-8">
              <h3 className="mb-2 text-center text-xl font-bold text-[#05264E]">
                Become an Expert in {course.category}
              </h3>
              <p className="mb-6 text-center text-sm text-gray-600">
                Over 200 students have already registered for the next batch!
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
                <Button type="submit" className="w-full bg-[#0099FF] py-6 text-lg">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPopup;
