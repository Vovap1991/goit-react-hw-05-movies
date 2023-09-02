import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmGallery } from 'components/FilmGallery/FilmGallery';
import { fetchFilmByQuery } from 'components/service/service';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);

  const changeQuery = newQuery => {
    if (query === newQuery) {
      return toast.error('Please, Enter another request!');
    }
    setQuery(`${Date.now()}/${newQuery}`);
    setFilms([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getFilms() {
      const normalizedQuery = query.slice(query.indexOf('/') + 1);
      try {
        const films = await fetchFilmByQuery(normalizedQuery);

        if (films.length === 0) {
          toast.error(
            'No movies have been found according to your request. Please, try again!'
          );
        } else {
          setFilms(films);
        }
      } catch (error) {
        toast.error('An error occurred while fetching movies:', error);
      }
    }

    getFilms();
  }, [query, films]);

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
