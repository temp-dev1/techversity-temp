import React, { useState } from "react";
import { Star } from "lucide-react";
import { Course } from "@/models/Course";
import { Button } from "@/components/ui/button";
import CourseDetailsPopup from "./CourseDetailsPopup";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-lg bg-white">
        {/* Image */}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        {/* Title */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#05264E] mb-2">
            {course.title}
          </h3>

          {/* Rating & Students */}
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <span className="flex items-center text-orange-500 font-medium">
              4.8 <Star size={14} className="fill-orange-500 ml-1 mr-2" />
            </span>
            <span>{course.reviews} Students</span>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {course.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium text-[#0099FF] bg-[#0099FF]/10"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Button */}
          <Button
            onClick={() => setShowDetails(true)}
            className="w-full bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-white font-semibold text-sm py-2 rounded-md"
          >
            Know More
          </Button>
        </div>
      </div>

      {/* Popup */}
      {showDetails && (
        <CourseDetailsPopup course={course} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default CourseCard;
