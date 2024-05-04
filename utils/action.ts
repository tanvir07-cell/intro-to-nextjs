"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const getTodos = async () => {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  return await prisma.todo.findMany();
};

export const deleteTodo = async (id) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/todos");
};

export const compleTodo = async (id, isChecked) => {
  try {
    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: { isCompleted: isChecked },
    });

    return todo;

    revalidatePath("/todos");
  } catch (err) {
    console.error(err);
  }
};

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
