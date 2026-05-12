import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-bg-main">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>   
    </div>
  );
};