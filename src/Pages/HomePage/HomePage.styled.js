import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0;
`;

export const FilmLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

export const FilmItem = styled.div`
  background-color: ##f7f7f7;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  box-shadow: 1px 9px 28px -13px rgba(189, 182, 189, 1);
  transition: box-shadow 200ms linear, transform 250ms linear;

  &:hover {
    box-shadow: 0px 27px 23px -9px rgba(189, 182, 189, 1);
    transform: translateY(-7px);
  }
`;

export const FilmImg = styled.img`
  border-radius: 10px;
  max-width: 100%;
`;

export const FilmTitle = styled.h2`
  font-size: 17px;
  padding: 10px;
  margin: 0;
  color: #659493;
`;
