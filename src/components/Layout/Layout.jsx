import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
