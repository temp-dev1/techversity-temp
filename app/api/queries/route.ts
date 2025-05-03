import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Query from '@/models/Query';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    const query = await Query.create(data);
    return NextResponse.json(query);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit query' }, { status: 500 });
  }
}
