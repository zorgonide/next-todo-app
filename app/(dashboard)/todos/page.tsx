import TodoList from '@/components/TodoList';
import db from '@/utils/db';
const getData = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const todos = await db.todo.findMany({});
  return todos;
};

async function TodosPage() {
  const todos = await getData();
  return (
    <div>
      <h1 className="font-bold">To Do List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage;
