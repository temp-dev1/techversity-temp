import React from "react";
import { Star } from "lucide-react";
import { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative h-[200px]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="mb-4 text-xl font-bold text-[#05264E]">
          {course.title}
        </h3>
        
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-[#FF9800] text-[#FF9800]" />
            <span className="ml-1 text-sm">{course.rating}</span>
          </div>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-1">
            <span className="text-gray-400">👤</span>
            <span className="text-sm text-gray-600">{course.reviews} Students</span>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="font-medium">Next Batch</div>
            <div className="rounded-full bg-orange-500 px-3 py-1 text-xs text-white">
              01st May,2025
            </div>
          </div>
          <div className="mt-1 text-xs text-gray-500">in 1 days</div>
        </div>
        
        <Button 
          className="w-full bg-[#8A3FEF] text-white hover:bg-[#7B2EE0] text-sm font-medium py-5"
        >
          Know More
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
