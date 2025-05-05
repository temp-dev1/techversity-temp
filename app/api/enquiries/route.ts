import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    const enquiry = await Enquiry.create(data);
    return NextResponse.json(enquiry);
  } catch (error) {
    
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}

