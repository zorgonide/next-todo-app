import { newTodo } from '@/utils/actions';
export default function NewTodoForm({}) {
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" className="border-2 border-black" />
        <button type="submit" className="border-2 border-black">
          Add Todo
        </button>
      </form>
    </div>
  );
}
