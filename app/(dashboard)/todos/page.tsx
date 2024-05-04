import TodoList from "@/components/TodoList";
import prisma from "@/utils/db";

const getTodos = async () => {
  await new Promise((resolve, reject) => setTimeout(reject, 2000));
  return await prisma.todo.findMany();
};

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
