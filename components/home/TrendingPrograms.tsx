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
            const daysRemaining = getDaysRemaining(course.nextBatch);

            return (
              <div
                key={course.id}
                className="overflow-hidden rounded-xl shadow-lg bg-white"
              >
                <div className="h-56 overflow-hidden rounded-t-xl">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#05264E] mb-3">
                    {course.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center text-[#FF5C00] mr-2">
                      {course.rating.toFixed(1)}
                      <Star size={16} className="ml-1 fill-[#FF5C00] text-[#FF5C00]" />
                    </span>
                    <span className="mx-2">|</span>
                    <span className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {course.reviews.toLocaleString()} Students
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t pt-4 text-sm">
                    <span className="font-semibold">Next Batch</span>
                    <span className="text-gray-600">
                      in {daysRemaining} {daysRemaining === 1 ? "day" : "days"}
                    </span>
                    <span className="bg-[#FFB200] text-white text-xs px-3 py-1 rounded font-semibold">
                      {course.nextBatch}
                    </span>
                  </div>

<div className="mt-4">
  <Link
    href="#"
    className="inline-block w-full bg-[linear-gradient(90deg,_#C84CF5_0%,_#3AA1FF_100%)] text-white text-sm text-center py-1.5 rounded-md font-semibold"
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
            className="inline-block border border-black px-6 py-2 rounded font-semibold hover:bg-black hover:text-white transition"
          >
            Explore All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
