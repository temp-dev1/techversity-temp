import { connectDB } from "../lib/db";
import Course from "../models/Course";


export interface Course {
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

// Immediately-invoked async function to fetch and export courses
let allCourses: any[] = [];

(async () => {
  try {
    await connectDB();
    const result = await Course.find({}).lean();
    courses = JSON.parse(JSON.stringify(result)); // make it serializable
  } catch (error) {
    console.error("Failed to fetch courses from MongoDB:", error);
  }
})();

export { allCourses };
