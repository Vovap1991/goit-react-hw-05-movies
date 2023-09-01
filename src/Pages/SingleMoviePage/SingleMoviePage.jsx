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
  AddInfoContainer,
  CastReviewsContainer,
  AddInfoTitle,
  CastReviewsLink,
} from './SingleMoviePage.styled';

import { defaultImg } from '../../components/service/service';
import Reviews from 'components/Reviews/Reviews';
import Cast from 'components/Cast/Cast';

const SingleMoviePage = () => {
  const [film, setFilm] = useState({});
  const [error, setError] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
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
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                    : defaultImg
                }
                width={250}
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
              <p>
                <FilmInfoSubtitle>Genres:</FilmInfoSubtitle>{' '}
                {film.genres
                  ? film.genres.map(genre => genre.name).join(', ')
                  : 'No genres available'}
              </p>
              <p>
                <FilmInfoSubtitle>Overview:</FilmInfoSubtitle> {film.overview}
              </p>
            </FilmInfoContainer>
          </FilmWrapper>
        </SingleFilmDataContainer>
        <hr />
        <AddInfoContainer>
          <AddInfoTitle>Additional Information</AddInfoTitle>

          <CastReviewsContainer>
            {' '}
            <CastReviewsLink
              to={`/movies/${movieId}/cast`}
              onClick={() => {
                setShowCast(true);
                setShowReviews(false);
              }}
            >
              Cast
            </CastReviewsLink>
            <CastReviewsLink
              to={`/movies/${movieId}/reviews`}
              onClick={() => {
                setShowReviews(true);
                setShowCast(false);
              }}
            >
              Reviews
            </CastReviewsLink>
          </CastReviewsContainer>
        </AddInfoContainer>
        <hr />
        {showCast && <Cast movieId={movieId} />}
        {showReviews && <Reviews movieId={movieId} />}
      </div>
      <Toaster />
    </div>
  );
};

export default SingleMoviePage;
