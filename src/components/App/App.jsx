import HomePage from 'Pages/HomePage/HomePage';
import Movies from 'Pages/Movies/Movies';
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
        <Route path="/movies/:movieId" element={<div>Selected Movie</div>}>
          <Route path="cast" element={<div>Selected Movie Cast</div>} />
          <Route path="reviews" element={<div>Selected Movie Reviews</div>} />
        </Route>
      </Routes>
    </Container>
  );
};
