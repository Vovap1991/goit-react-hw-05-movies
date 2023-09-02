import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 40px;
  color: #0a0909;
  border-radius: 10px;
  background-color: white;
  transition: box-shadow 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #faf5f5;
  }
`;

export const FilmGalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0;
`;

export const FilmGalleryLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 5px;

  &:hover {
    color: #ff4500;
    outline: none;
  }
`;

export const FilmGalleryItem = styled.div`
  background-color: ##f7f7f7;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  box-shadow: 1px 9px 28px -13px rgba(189, 182, 189, 1);
  transition: box-shadow 200ms linear, transform 200ms linear,
    color 200ms linear;

  &:hover {
    box-shadow: 0px 27px 23px -9px rgba(189, 182, 189, 1);
    transform: translateY(-7px);
    color: #ff4500;
  }
`;

export const FilmGalleryImg = styled.img`
  border-radius: 10px;
  max-width: 100%;

  &:hover {
    color: #ff4500;
  }
`;

export const FilmGalleryTitle = styled.h2`
  font-size: 17px;
  padding: 10px;
  margin: 0;
  color: #659493;
  transition: color 200ms linear;

  &:hover {
    color: #ff4500;
  }
`;

export const ResetButtonSpan = styled.span`
  padding: 10px;
  font-size: 18px;
  color: black;
  font-weight: 500;
`;
