import { ContainerNav, ContainerNavLink } from '../App/App.styled';

export const Navigation = () => {
  return (
    <ContainerNav>
      <ContainerNavLink to="/">Home</ContainerNavLink>
      <ContainerNavLink to="/movies">Movies</ContainerNavLink>
    </ContainerNav>
  );
};
