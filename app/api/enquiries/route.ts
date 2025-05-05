import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    console.log('Received Data:', data);  // Log data to check if it's correct
    const enquiry = await Enquiry.create(data);
    return NextResponse.json(enquiry);
  } catch (error) {
    console.error('Error:', error);  // Log error for better debugging
    return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
  }
}

