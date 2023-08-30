import { useEffect } from 'react';
import { useState } from 'react';
import { fetchFilmByQuery } from 'components/service/service';
import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarSpan,
} from './SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [, setFilms] = useState([]);

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
    <SearchBarWrapper>
      <SearchBarForm
        onSubmit={event => {
          event.preventDefault();
          changeQuery(event.target.elements.query.value.trim());
          event.target.reset();
        }}
      >
        <SearchBarInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
        ></SearchBarInput>
        <SearchBarButton>
          <AiOutlineSearch size={25} color="#0a0909" />
          <SearchBarSpan>Search</SearchBarSpan>
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarWrapper>
  );
};
