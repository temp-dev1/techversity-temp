import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CertPartner from '@/models/CertPartner';

export async function GET() {
  try {
    await connectDB();
    const partners = await CertPartner.find({});
    return NextResponse.json(partners);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certification partners' }, { status: 500 });
  }
}
