import TodoList from "@/components/TodoList";
import { getTodos } from "@/utils/action";
import prisma from "@/utils/db";

const TodoPage = async () => {
  const getAllTodos = await getTodos();
  return (
    <div>
      <h1>This is the todo page</h1>
      <TodoList todos={getAllTodos} />
    </div>
  );
};

export default TodoPage;
