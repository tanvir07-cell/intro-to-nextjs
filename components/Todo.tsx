interface Todo {
  id: string;
  content: string;
  isCompleted: boolean;
  createdAt: Date;
}

const Todo = ({ todo }: { todo: Todo }) => {
  return <li>{todo.content}</li>;
};

export default Todo;
