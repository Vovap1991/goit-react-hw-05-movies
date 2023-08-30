import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarSpan,
} from './SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarWrapper>
      <SearchBarForm
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target.elements.query.value.trim());
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
