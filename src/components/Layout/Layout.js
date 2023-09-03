import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from '../App/App.styled';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <hr />
      <Suspense fallback={<Loader>Loading...</Loader>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Container>
  );
};

export default Layout;
