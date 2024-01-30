import { api } from '@/utils/api';
import { unstable_noStore as noStore } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  noStore();
  const state = await api.getState();

  return NextResponse.json({ data: state });
}
