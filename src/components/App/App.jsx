import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../Pages/HomePage/HomePage'));
const Layout = lazy(() => import('../Layout/Layout'));
const Movies = lazy(() => import('../../Pages/Movies/Movies'));
const SingleMoviePage = lazy(() =>
  import('../../Pages/SingleMoviePage/SingleMoviePage')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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
