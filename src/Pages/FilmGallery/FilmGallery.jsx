import {
  FilmGalleryList,
  FilmGalleryLink,
  FilmGalleryItem,
  FilmGalleryImg,
  FilmGalleryTitle,
} from './FilmGallery.styled';

const placeholderImageURL =
  'https://pixabay.com/get/gf9641d5aeb0a6228fdeb5cf4a8906f07c72e48f63fea126a193421029c577a776205b5c9c84dcf875ebc01d7fc1081c7_640.jpg';

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
                    : placeholderImageURL
                }
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
