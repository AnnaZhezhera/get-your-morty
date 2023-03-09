import { LayoutBox } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutBox>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};
