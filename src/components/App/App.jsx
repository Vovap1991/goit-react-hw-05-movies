import Cast from 'components/Cast/Cast';
import HomePage from 'Pages/HomePage/HomePage';
import Movies from 'Pages/Movies/Movies';
import Reviews from 'components/Reviews/Reviews';
import SingleMoviePage from 'Pages/SingleMoviePage/SingleMoviePage';
import { Routes, Route } from 'react-router-dom';

import { Container, ContainerNav, ContainerNavLink } from './App.styled';

export const App = () => {
  return (
    <Container>
      <ContainerNav>
        <ContainerNavLink to="/">Home</ContainerNavLink>
        <ContainerNavLink to="/movies">Movies</ContainerNavLink>
      </ContainerNav>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
