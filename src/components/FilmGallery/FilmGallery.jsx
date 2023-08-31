import {
  FilmGalleryList,
  FilmGalleryLink,
  FilmGalleryItem,
  FilmGalleryImg,
  FilmGalleryTitle,
} from './FilmGallery.styled';

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
                    : 'https://pixabay.com/get/g3b267e6d2ad348279f57c32ba02bce132b3a192f33d933979aaded89ee5be7cc84b732b66cae09da18a098d995874fed_640.jpg'
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
