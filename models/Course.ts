// models/Course.ts
import mongoose, { Schema, Document } from "mongoose";

// Define the Course interface
export interface Course extends Document {
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

// Define the schema for the Course
const courseSchema = new Schema<Course>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  duration: { type: String, required: true },
  level: { type: String, required: true },
  price: { type: Number, required: true },
  discountedPrice: { type: Number, required: true },
  nextBatch: { type: String, required: true },
  category: { type: String, required: true },
  features: { type: [String], required: true }
});

// Create and export the model
const Course = mongoose.models.Course || mongoose.model<Course>("Course", courseSchema);

export default Course;
