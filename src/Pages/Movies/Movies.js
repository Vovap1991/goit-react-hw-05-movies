import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmGallery } from 'Pages/FilmGallery/FilmGallery';
import { fetchFilmByQuery } from 'components/service/service';
import { useEffect, useState } from 'react';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  const changeQuery = newQuery => {
    if (query === newQuery) {
      return console.aller('!!!!!!!!!');
    }
    setQuery(newQuery);
    setFilms([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFilms() {
      try {
        const films = await fetchFilmByQuery(query);

        if (films.length === 0) {
          console.error(
            'No movies have been found according to your request. Please, try again!'
          );
        } else {
          setFilms(films);
        }
      } catch (error) {
        console.error('An error occurred while fetching movies:', error);
      }
    }

    getFilms();
  }, [query]);

  return (
    <div>
      <div>
        <SearchBar onSubmit={changeQuery} />
      </div>

      <div>
        <FilmGallery films={films} />
      </div>
    </div>
  );
};

export default Movies;
