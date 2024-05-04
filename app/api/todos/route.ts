import { createTodo, getTodos } from "@/utils/action";
import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const todos = await getTodos();
  return NextResponse.json({
    todos,
  });
}

export async function POST(request: Request) {
  let data = await request.json();
  await prisma.todo.create({
    data,
  });
  return NextResponse.json({
    isSuccessful: true,
    data,
  });
}
