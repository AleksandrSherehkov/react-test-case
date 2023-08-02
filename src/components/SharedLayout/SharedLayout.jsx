import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header/Header';

export const SharedLayout = () => {
  return (
    <div className="container bg-cyan-600 min-h-screen min-w-full p-10">
      <Header />
      <main className="mt-20">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
