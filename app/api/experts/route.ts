import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Expert from '@/models/Expert';

export async function GET() {
  try {
    await connectDB();
    const experts = await Expert.find({});
    return NextResponse.json(experts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch experts' }, { status: 500 });
  }
}
