import React from "react";
import { Star } from "lucide-react";
import { courses as allCourses } from "@/data/courses";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white transition hover:shadow-xl">
      <div className="relative h-[180px]">
        <img src={course.image} alt={course.title} className="object-cover h-full w-full" />
        <span className="absolute top-2 left-2 bg-[#8A3FEF] text-white text-xs px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-[#05264E]">{course.title}</h2>

        <div className="flex items-center text-sm text-gray-600">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="ml-1">{course.rating} ({course.reviews} reviews)</span>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>📅 {course.duration}</span>
          <span>📈 {course.level}</span>
        </div>

        <div className="space-y-1 text-xs">
          {course.features.map((feature, index) => (
            <div key={index}>✅ {feature}</div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-2">
          <div>
            <span className="text-[#8A3FEF] font-semibold text-base">₹{course.discountedPrice}</span>
            <span className="line-through text-sm text-gray-400 ml-2">₹{course.price}</span>
          </div>
          <Button className="bg-[#8A3FEF] text-white px-4 py-2 text-sm hover:bg-[#6f2dd6]">Know More</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
