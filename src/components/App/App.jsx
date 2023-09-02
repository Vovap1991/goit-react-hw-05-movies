import Cast from 'components/Cast/Cast';
import HomePage from 'Pages/HomePage/HomePage';
import Movies from 'Pages/Movies/Movies';
import Reviews from 'components/Reviews/Reviews';
import SingleMoviePage from 'Pages/SingleMoviePage/SingleMoviePage';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<SingleMoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
