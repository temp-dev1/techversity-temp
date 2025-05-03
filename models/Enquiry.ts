import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  college: String,
  courseId: { type: String, required: true },
  courseTitle: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  college?: string;
  courseId: string;
  courseTitle: string;
  createdAt: Date;
}

export default mongoose.models.Enquiry || mongoose.model('Enquiry', EnquirySchema);
