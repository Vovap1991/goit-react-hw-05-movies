import { useState, useEffect } from 'react';
import { fetchPopularFIlms } from '../../components/service/service';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
  FilmList,
  FilmLink,
  FilmItem,
  FilmImg,
  FilmTitle,
} from './HomePage.styled';

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
      <FilmList>
        {films.map(({ id, title, poster_path }) => (
          <FilmLink key={id} to={`/movies/${id}`}>
            <FilmItem>
              <FilmImg
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
              <FilmTitle>{title}</FilmTitle>
            </FilmItem>
          </FilmLink>
        ))}
      </FilmList>
    </div>
  );
};

export default HomePage;
