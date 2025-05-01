"use client";

import React, { useState, useEffect } from "react";
import { Book, GraduationCap, Tag, Clock } from "lucide-react";
import { allCourses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import CourseFilters from "@/components/courses/CourseFilters";
import { Button } from "@/components/ui/button";



export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<any>({
    categories: [],
    duration: [],
    level: [],
    priceRange: null,
  });

  useEffect(() => {
    let results = [...allCourses];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.category.toLowerCase().includes(query)
      );
    }

    // Apply category filters
    if (activeFilters.categories.length > 0 && !activeFilters.categories.includes("All Categories")) {
      results = results.filter((course) =>
        activeFilters.categories.includes(course.category)
      );
    }

    // Apply duration filters
    if (activeFilters.duration.length > 0 && !activeFilters.duration.includes("All Durations")) {
      results = results.filter((course) => {
        const durationMonths = parseInt(course.duration);
        return activeFilters.duration.some((filter: string) => {
          if (filter === "1-3 Months") return durationMonths >= 1 && durationMonths <= 3;
          if (filter === "4-6 Months") return durationMonths >= 4 && durationMonths <= 6;
          if (filter === "6+ Months") return durationMonths > 6;
          return false;
        });
      });
    }

    // Apply level filters
    if (activeFilters.level.length > 0 && !activeFilters.level.includes("All Levels")) {
      results = results.filter((course) =>
        activeFilters.level.some((filter: string) =>
          course.level.includes(filter)
        )
      );
    }

    // Apply price range filter
    if (activeFilters.priceRange) {
      const [min, max] = activeFilters.priceRange;
      results = results.filter(
        (course) => course.discountedPrice >= min && course.discountedPrice <= max
      );
    }

    setFilteredCourses(results);
  }, [searchQuery, activeFilters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
  };

  // Component with scaling effect for each CourseCard
  const CourseCardWithScaling: React.FC<{ course: any }> = ({ course }) => (
  <div className="group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
    <CourseCard course={course} />
  </div>
);

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="bg-[#05264E] py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Explore Our Courses
            </h1>
            <p className="mx-auto max-w-2xl text-gray-300 md:text-lg">
              Discover a wide range of courses designed to help you acquire in-demand skills and advance your career.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center rounded-lg bg-[#06315F] px-4 py-3">
              <Book className="mr-3 h-5 w-5 text-[#0099FF]" />
              <div>
                <p className="text-sm text-gray-300">Total Courses</p>
                <p className="font-bold text-white">{allCourses.length}+</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg bg-[#06315F] px-4 py-3">
              <GraduationCap className="mr-3 h-5 w-5 text-[#FF5C00]" />
              <div>
                <p className="text-sm text-gray-300">Students Enrolled</p>
                <p className="font-bold text-white">25,000+</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg bg-[#06315F] px-4 py-3">
              <Tag className="mr-3 h-5 w-5 text-[#0099FF]" />
              <div>
                <p className="text-sm text-gray-300">Categories</p>
                <p className="font-bold text-white">12+</p>
              </div>
            </div>
            <div className="flex items-center rounded-lg bg-[#06315F] px-4 py-3">
              <Clock className="mr-3 h-5 w-5 text-[#FF5C00]" />
              <div>
                <p className="text-sm text-gray-300">Hours of Content</p>
                <p className="font-bold text-white">5,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:px-6">
        <CourseFilters onSearch={handleSearch} onFilterChange={handleFilterChange} />

        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCourses.map((course) => (
              <CourseCardWithScaling key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="my-16 text-center">
            <h3 className="mb-2 text-xl font-semibold text-[#05264E]">No Courses Found</h3>
            <p className="mb-6 text-gray-600">Try adjusting your search criteria or browse all courses.</p>
            <Button
              variant="blue"
              onClick={() => {
                setSearchQuery("");
                setActiveFilters({
                  categories: [],
                  duration: [],
                  level: [],
                  priceRange: null,
                });
              }}
            >
              View All Courses
            </Button>
          </div>
        )}

        <div className="mt-12 rounded-lg bg-[#05264E] p-8 text-center text-white">
          <h2 className="mb-2 text-2xl font-bold">Can't Find What You're Looking For?</h2>
          <p className="mb-6 mx-auto max-w-2xl">
            Contact our education counselors to get personalized course recommendations based on your career goals.
          </p>
          <Button variant="orange" size="lg">
            Request Custom Course
          </Button>
        </div>
      </div>
    </div>
  );
}
