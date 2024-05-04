"use client";
import { createTodo } from "@/utils/action";
import { useState, useTransition } from "react";

const NewTodoForm = () => {
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <>
      {isPending && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          Loading...🌏
        </div>
      )}

      <form>
        <input
          type="text"
          name="content"
          id="content"
          className="border-green-400"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            startTransition(() => {
              const formData = new FormData();
              formData.append("content", input);
              createTodo(formData);
            });
            setInput("");
          }}
          className="btn bg-green-400 px-4 py-2 rounded"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default NewTodoForm;
