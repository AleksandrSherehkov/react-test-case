import { Header } from '@/components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div className="container bg-cyan-600 min-h-screen min-w-full p-10">
      <Header />
      <main className="mt-20">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
