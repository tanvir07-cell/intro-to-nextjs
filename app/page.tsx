import NewTodoForm from "@/components/NewTodoForm";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

interface User {
  id: number;
  name: string;
}

const page = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user: User) => {
          console.log(user);
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <NewTodoForm />
    </div>
  );
};

export default page;
