import { Todo } from '@prisma/client';
import ToDo from './ToDo';

type Props = {
  todos: Todo[];
};

function TodoList({ todos }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
