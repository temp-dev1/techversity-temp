import React from "react";
import Link from "next/link";
import { courses } from "@/data/courses";
import { Star, Users } from "lucide-react";
import { parse } from "date-fns";

// Helper function to calculate days remaining
const getDaysRemaining = (batchDate: string) => {
  const parsedDate = parse(batchDate, "do MMMM, yyyy", new Date());
  const today = new Date();
  const timeDiff = parsedDate.getTime() - today.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return dayDiff;
};

const TrendingPrograms = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#05264E] md:text-4xl">
            Trending Specialization Programs
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((course) => {
            return (
              <div
                key={course.id}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-[#05264E] transition-colors duration-300 group-hover:text-[#0099FF]">
                    {course.title}
                  </h3>

                  <div className="mb-3 flex items-center text-sm text-gray-600">
                    <span className="mr-2 flex items-center text-[#FF5C00]">
                      {course.rating.toFixed(1)}
                      <Star size={16} className="ml-1 fill-[#FF5C00] text-[#FF5C00]" />
                    </span>
                    <span className="mx-2">|</span>
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {course.reviews.toLocaleString()} Students
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-[#0099FF]/10 px-3 py-1 text-xs font-medium text-[#0099FF]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      href="#"
                      className="inline-block w-full rounded-md bg-[linear-gradient(90deg,_#C84CF5_0%,_#3AA1FF_100%)] py-1.5 text-center text-sm font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02]"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block rounded border border-black px-6 py-2 font-semibold transition hover:bg-black hover:text-white"
          >
            Explore All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
