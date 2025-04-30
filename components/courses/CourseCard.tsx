import React from "react";
import { Star } from "lucide-react";
import { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-0 top-0 rounded-br-lg bg-[#FF5C00] px-3 py-1 text-sm font-semibold text-white">
          {course.category}
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">{course.duration}</span>
          <span className="text-sm font-medium text-gray-500">{course.level}</span>
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-[#05264E] transition-colors group-hover:text-[#0099FF]">
          {course.title}
        </h3>
        
        <div className="mb-3 flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(course.rating) ? "fill-[#FF5C00] text-[#FF5C00]" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({course.reviews} reviews)
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
        
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="mr-2 text-lg font-bold text-[#05264E]">
              ₹{course.discountedPrice.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{course.price.toLocaleString()}
            </span>
          </div>
          <span className="rounded-full bg-[#FF5C00]/10 px-3 py-1 text-sm font-medium text-[#FF5C00]">
            {Math.round(((course.price - course.discountedPrice) / course.price) * 100)}% OFF
          </span>
        </div>
        
        <Button variant="blue" className="w-full">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;