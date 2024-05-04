"use client";

import { compleTodo } from "@/utils/action";
import { useState, useTransition } from "react";

interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
  createdAt: Date;
}

const Todo = ({ todo }: { todo: Todo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {isPending ? (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          Loading...🌏
        </div>
      ) : null}
      <li
        className={`
        flex justify-between items-center 
        border-b-2 border-gray-300 
        p-2
        ${isCompleted ? "line-through" : ""}
        `}
      >
        {todo.content}

        <input
          type="checkbox"
          name=""
          id=""
          checked={isCompleted}
          className={`
          
          ${isCompleted ? "checked:bg-green-500" : "checked:bg-red-500"}
        
        
        `}
          onChange={(e) => {
            startTransition(() => {
              setIsCompleted(e.target.checked);
              compleTodo(todo.id, e.target.checked);
            });
          }}
        />
        <button className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </li>
    </>
  );
};

export default Todo;
