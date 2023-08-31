import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFilmById } from '../../components/service/service';
import { Toaster, toast } from 'react-hot-toast';
import {
  SingleFilmDataContainer,
  FilmWrapper,
  FilmTitle,
  FilmInfoSubtitle,
  FilmInfoContainer,
} from './SingleMoviePage.styled';

const SingleMoviePage = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getFilm = async () => {
      try {
        const filmData = await fetchFilmById(movieId);
        if (filmData) {
          setFilm(filmData);
        } else {
          setError(error);
        }
      } catch (error) {
        toast.error('Something went wrong. Please, try again later!');
        setError(error);
      }
    };
    getFilm();
  }, [movieId, error]);

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <div>
        <SingleFilmDataContainer>
          <FilmWrapper>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt={film.title}
              />
            </div>
            <FilmInfoContainer>
              <FilmTitle>{film.title}</FilmTitle>
              <p>
                <FilmInfoSubtitle>Release Date:</FilmInfoSubtitle>{' '}
                {film.release_date}
              </p>
              <p>
                <FilmInfoSubtitle>User Rating:</FilmInfoSubtitle>{' '}
                {film.vote_average}
              </p>
              {/* <p>
                <FilmInfoSubtitle>Genres:</FilmInfoSubtitle>{' '}
                {film.genres.map(genre => genre.name).join(', ')}
              </p> */}
              <p>
                <FilmInfoSubtitle>Overview:</FilmInfoSubtitle> {film.overview}
              </p>
            </FilmInfoContainer>
          </FilmWrapper>
        </SingleFilmDataContainer>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleMoviePage;
