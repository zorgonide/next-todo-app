import db from '@/utils/db';
import { NextResponse } from 'next/server';
export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ todos: await db.todo.findMany() });
};

export const POST = async (req: Request, res: Response) => {
  const data = await req.json();
  await db.todo.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ todos: await db.todo.findMany() });
};
