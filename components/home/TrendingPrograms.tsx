"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Course } from "@/models/Course";
import CourseDetailsPopup from "@/components/courses/CourseDetailsPopup";

const TrendingPrograms = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#05264E] md:text-4xl">
            Trending Specialization Programs
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our most popular courses designed to equip you with in-demand skills for today's job market.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 rounded-br-xl bg-[#FF5C00] px-3 py-1 text-sm font-semibold text-white">
                  {course.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#05264E] group-hover:text-[#0099FF] transition-colors mb-2">
                  {course.title}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(course.rating)
                            ? "fill-[#FF5C00] text-[#FF5C00]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({course.reviews} reviews)</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-[#0099FF]/10 px-3 py-1 text-xs font-medium text-[#0099FF]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-[#05264E] mr-2">
                      ₹{course.discountedPrice.toLocaleString()}
                    </span>
                    <span className="text-sm line-through text-gray-500">
                      ₹{course.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="bg-[#FF5C00]/10 text-[#FF5C00] px-3 py-1 text-sm font-medium rounded-full">
                    {Math.round(((course.price - course.discountedPrice) / course.price) * 100)}% OFF
                  </span>
                </div>

                <Button
                  variant="blue"
                  className="w-full"
                  onClick={() => setSelectedCourse(course)}
                >
                  Know More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/courses" className="group inline-flex items-center">
              View All Courses
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {selectedCourse && (
        <CourseDetailsPopup
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
};

export default TrendingPrograms;
