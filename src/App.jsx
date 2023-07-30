import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from '@/components/SharedLayout/SharedLayout';

const TweetsPage = lazy(() => import('@/pages/TweetsPage/TweetsPage'));
const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
