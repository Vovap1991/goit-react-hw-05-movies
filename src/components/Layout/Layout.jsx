import { Outlet } from 'react-router-dom';
import { Container, ContainerNav, ContainerNavLink } from '../App/App.styled';

export const Layout = () => {
  return (
    <Container>
      <ContainerNav>
        <ContainerNavLink to="/">Home</ContainerNavLink>
        <ContainerNavLink to="/movies">Movies</ContainerNavLink>
      </ContainerNav>
      <hr />
      <Outlet />
    </Container>
  );
};
