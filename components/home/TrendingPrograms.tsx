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
    <section id="trending-programs" className="bg-gray-50 py-16">
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
          {courses.slice(0, 6).map((course) => (
            <div
              key={course._id}
              className="rounded-xl bg-white shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-[#05264E] mb-1">{course.title}</h3>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span className="flex items-center text-[#FF5C00] mr-2">
                    <Star className="w-4 h-4 fill-[#FF5C00] text-[#FF5C00]" />
                    <span className="ml-1">{course.rating}</span>
                  </span>
                  <span>• {course.reviews} Students</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium py-2 rounded-md hover:opacity-90"
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
