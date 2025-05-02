import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  id: Number,
  title: String,
  image: String,
  rating: Number,
  reviews: Number,
  duration: String,
  level: String,
  price: Number,
  discountedPrice: Number,
  nextBatch: String,
  category: String,
  features: [String],
});

export interface Course {
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

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
