import { api } from '@/utils/api';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { id, name } = (await req.json()) as unknown as {
    id: number;
    name: string;
  };

  await api.updateName(id, name);

  return NextResponse.json({ code: 200 });
}
