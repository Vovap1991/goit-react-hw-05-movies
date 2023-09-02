import { Navigation } from 'components/Navigation/Navigation';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { Container } from '../App/App.styled';

export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <hr />
      <Outlet />
      <Toaster />
    </Container>
  );
};
