import NewTodoForm from '@/components/NewTodoForm';
import { ReactNode } from 'react';

const DashboardTodosLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-10">
      <h1 className="font-semibold">Make a list</h1>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  );
};
export default DashboardTodosLayout;
