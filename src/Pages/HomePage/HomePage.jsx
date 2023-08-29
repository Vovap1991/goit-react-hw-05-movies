import { useState, useEffect } from 'react';
import { fetchPopularFIlms } from '../../components/service/service';
import { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const popularFilms = await fetchPopularFIlms();
      setFilms(popularFilms);
    };
    getFilms();
  }, []);

  return (
    <div>
      <Toaster />
      <h1>Trending Today</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <h2>{film.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
              alt={film.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
