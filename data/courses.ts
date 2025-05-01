import { connectDB } from "../lib/db";
import Course from "../models/Course";

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
