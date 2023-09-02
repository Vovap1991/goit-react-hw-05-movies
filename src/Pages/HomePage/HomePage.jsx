import { useState, useEffect } from 'react';
import {
  FilmList,
  FilmLink,
  FilmItem,
  FilmImg,
  FilmTitle,
} from './HomePage.styled';
import { fetchPopularFIlms } from '../../components/service/service';

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
