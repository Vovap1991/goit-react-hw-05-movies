import {
  FilmGalleryList,
  FilmGalleryLink,
  FilmGalleryItem,
  FilmGalleryImg,
  FilmGalleryTitle,
} from './FilmGallery.styled';

import { defaultImg } from '../service/service';

export const FilmGallery = ({ films }) => {
  return (
    <FilmGalleryList>
      {films.map(film => {
        return (
          <FilmGalleryLink key={film.id} to={`/movies/${film.id}`}>
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
  );
};
