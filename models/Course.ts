import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  duration: String,
  level: String,
  rating: Number,
  reviews: Number,
  price: Number,
  discountedPrice: Number,
  features: [String],
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
