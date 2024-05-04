"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const createTodo = async (formData) => {
  console.log("formData", formData);
  try {
    const todo = await prisma.todo.create({
      data: {
        content: formData.get("content"),
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/todos");
};
