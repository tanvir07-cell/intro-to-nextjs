"use client";

import React, { useState } from "react";

const NewTodoForm = () => {
  const [todo, setTodo] = useState("");
  return (
    <form>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
