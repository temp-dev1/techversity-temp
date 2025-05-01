// app/api/courses/route.ts
import { connectDB } from "@/lib/db";
import Course from "@/models/Course";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const courses = await Course.find({}).lean();
    return NextResponse.json(courses);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ message: "Failed to fetch courses" }, { status: 500 });
  }
}
