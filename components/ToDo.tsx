'use client';
import { useTransition } from 'react';
import { Todo } from '@prisma/client';
import { completeTodo } from '@/utils/actions';
type Props = {
  todo: Todo;
};

export default function ToDo({ todo }: Props) {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`mt-1 cursor-pointer ${
        todo.completed ? 'bg-gray-200 line-through' : 'bg-white'
      } p-2 border-2 border-black`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      <p>{todo.content}</p>
    </div>
  );
}
