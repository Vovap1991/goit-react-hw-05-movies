import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SingleFilmDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilmWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const FilmInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  padding: 0;
`;

export const FilmTitle = styled.h2`
  font-size: 50px;
`;

export const FilmInfoSubtitle = styled.strong`
  font-size: 20px;
`;

export const AddInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const CastReviewsContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const AddInfoTitle = styled.h2`
  font-size: 40px;
  margin: 0;
  margin-bottom: 20px;
`;

export const CastReviewsLink = styled(Link)`
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  width: 150px;
  height: 40px;
  color: #0a0909;
  border-radius: 10px;
  background-color: #ffc0cb;
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #659493;
  }
`;

export const BackButton = styled(Link)`
  margin-bottom: 30px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 40px;
  color: #000000;
  font-weight: 600;
  border-radius: 10px;
  background-color: #afc7b1;
  transition: box-shadow 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: #ffc0cb;
  }
`;
