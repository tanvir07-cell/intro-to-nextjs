import { createTodo } from "@/utils/action";

const NewTodoForm = () => {
  return (
    <form action={createTodo}>
      <input
        type="text"
        name="content"
        id="content"
        className="border-green-400"
      />
      <button type="submit" className="btn bg-green-400 px-4 py-2 rounded">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodoForm;
