import { useLocation } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import {
  FilmGalleryList,
  FilmGalleryLink,
  FilmGalleryItem,
  FilmGalleryImg,
  FilmGalleryTitle,
  ResetButton,
  ResetButtonSpan,
} from './FilmGallery.styled';
import { defaultImg } from '../service/service';

export const FilmGallery = ({ films, onClick }) => {
  const location = useLocation();
  return (
    <div>
      <ResetButton onClick={onClick}>
        <AiOutlineClose size={25} color="black"></AiOutlineClose>
        <ResetButtonSpan>Reset</ResetButtonSpan>
      </ResetButton>
      <FilmGalleryList>
        {films.map(film => {
          return (
            <FilmGalleryLink
              key={film.id}
              to={`/movies/${film.id}`}
              state={{ from: location }}
            >
              <FilmGalleryItem>
                <FilmGalleryImg
                  src={
                    film.poster_path
                      ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                      : defaultImg
                  }
                  width={250}
                  alt={film.title}
                />
                <FilmGalleryTitle>{film.title}</FilmGalleryTitle>
              </FilmGalleryItem>
            </FilmGalleryLink>
          );
        })}
      </FilmGalleryList>
    </div>
  );
};
