import { connectDB } from "@/lib/db";
import Course from "@/models/Course";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      await connectDB();
      const courses = await Course.find({}).lean();
      res.status(200).json(courses);
    } catch (error) {
      console.error("API error:", error);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
