// pages/api/courses.ts
import { connectDB } from "@/lib/db";
import Course from "@/models/Course";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    const courses = await Course.find({}).lean(); // Fetch courses from DB
    res.status(200).json(courses); // Send courses as response
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
