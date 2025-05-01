import mongoose from "mongoose";

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

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
