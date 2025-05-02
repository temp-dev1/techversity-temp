import React from "react";
import { Star } from "lucide-react";

interface Course {
  _id: string;
  id: number;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  duration: string;
  level: string;
  price: number;
  discountedPrice: number;
  nextBatch: string;
  category: string;
  features: string[];
}

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md 
                  transition-transform transition-shadow 
                  duration-200 ease-out hover:scale-[1.02] hover:shadow-xl 
                  transform-gpu hover:z-10 relative">
      <div className="relative h-[180px] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover h-full w-full transition-transform duration-300 
                     group-hover:scale-[1.05]"
        />
        <span className="absolute top-2 left-2 bg-[#8A3FEF] text-white text-xs px-3 py-1 rounded-full">
          {course.category}
        </span>
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-[#05264E] line-clamp-2">{course.title}</h2>

        <div className="flex items-center text-sm text-gray-600">
          <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
          <span className="ml-1">
            {course.rating.toFixed(1)} ({course.reviews} students)
          </span>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>📅 {course.duration}</span>
          <span>📈 {course.level}</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div>
            <span className="text-[#8A3FEF] font-semibold text-base">
              ₹{course.discountedPrice}
            </span>
            <span className="line-through text-sm text-gray-400 ml-2">
              ₹{course.price}
            </span>
          </div>
          <button className="bg-[#8A3FEF] text-white px-4 py-2 text-sm rounded 
                           hover:bg-[#6f2dd6] transition-colors duration-200">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
