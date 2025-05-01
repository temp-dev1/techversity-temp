import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Schema, Document } from 'mongoose';

// Connection URI (You can use environment variable here)
const MONGODB_URI = process.env.MONGODB_URI as string;

interface Partner extends Document {
  id: number;
  name: string;
  logo: string;
}

const PartnerSchema = new Schema<Partner>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  logo: { type: String, required: true },
});

const PartnerModel = mongoose.models.Partner || mongoose.model<Partner>('Partner', PartnerSchema);

async function connectDB() {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(MONGODB_URI);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDB();
    const partners = await PartnerModel.find().lean(); // Fetch data from the `partners` collection
    res.status(200).json(partners); // Return partners data in JSON format
  } catch (error) {
    console.error('Failed to fetch partners:', error);
    res.status(500).json({ error: 'Failed to fetch partners' });
  }
}
