import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from '../App/App.styled';

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <hr />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};
