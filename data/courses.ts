import { connectDB } from "../lib/db";
import Course from "../models/Course";

export interface CourseType {
  _id: string;  // MongoDB default _id
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

let allCourses: CourseType[] = [];

(async () => {
  try {
    await connectDB();
    const result = await Course.find({}).lean();
    allCourses = JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error("Failed to fetch courses from MongoDB:", error);
  }
})();

export { allCourses };
