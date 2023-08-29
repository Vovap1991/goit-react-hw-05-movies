import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: block;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ContainerNav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 15px;
`;

export const ContainerNavLink = styled(Link)`
  list-style: none;
  text-decoration: none;

  font-size: 20px;
  font-weight: 700;
  color: #699073;

  padding: 5px;

  transition: color 200ms linear, font-size 200ms linear,
    box-shadow 200ms linear;

  &:hover {
    color: #ff4500;
    font-size: 25px;
  }
  &: focus {
    color: #ff4500;
    font-size: 25px;
    box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
    border-radius: 4px;
    background-color: #faeee9;
  }
`;
