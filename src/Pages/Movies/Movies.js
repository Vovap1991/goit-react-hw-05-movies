import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { FilmGallery } from 'components/FilmGallery/FilmGallery';
import { fetchFilmByQuery } from 'components/service/service';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const changeQuery = newQuery => {
    if (query === newQuery) {
      return toast.error('Please, Enter another request!');
    }
    setsearchParams({ query: newQuery });
    setFilms([]);
  };

  const ResetQuery = () => {
    setsearchParams({ query: '' });
  };

  useEffect(() => {
    if (query === '') {
      setFilms([]);
      return;
    }

    async function getFilms() {
      try {
        const films = await fetchFilmByQuery(query);

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
  }, [query]);

  return (
    <div>
      <div>
        <SearchBar onSubmit={changeQuery} />
      </div>

      <div>
        <FilmGallery films={films} onClick={ResetQuery} />
      </div>
    </div>
  );
};

export default Movies;
