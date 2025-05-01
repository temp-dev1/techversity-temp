import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Schema, Document } from 'mongoose';

// Connection URI (You can use environment variable here)
const MONGODB_URI = process.env.MONGODB_URI as string;

interface Expert extends Document {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  image: string;
  experience: string;
  linkedin: string;
}

const ExpertSchema = new Schema<Expert>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  companyLogo: { type: String, required: true },
  image: { type: String, required: true },
  experience: { type: String, required: true },
  linkedin: { type: String, required: true },
});

const ExpertModel = mongoose.models.Expert || mongoose.model<Expert>('Expert', ExpertSchema);

async function connectDB() {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(MONGODB_URI);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    const experts = await ExpertModel.find().lean(); // Fetch data from the `experts` collection
    res.status(200).json(experts); // Return experts data in JSON format
  } catch (error) {
    console.error('Failed to fetch experts:', error);
    res.status(500).json({ error: 'Failed to fetch experts' });
  }
}

