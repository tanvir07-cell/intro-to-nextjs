"use client";

import Todo from "./Todo";

interface Todos {
  id: string;
  content: string;
  isCompleted: boolean;
  createdAt: Date;
}

const TodoList = ({ todos }: { todos: Todos[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
