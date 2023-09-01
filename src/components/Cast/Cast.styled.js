import styled from 'styled-components';

export const CastContainer = styled.div`
  background-color: #f2e9eb;
  padding: 15px 10px;
`;

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 0;
  list-style: none;
`;

export const CastTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 50px;
`;

export const CastItem = styled.li`
  background-color: #f7f7f7;
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

export const CastImg = styled.img`
  border-radius: 10px;
  max-width: 100%;

  &:hover {
    color: #ff4500;
  }
`;

export const CastItemActorName = styled.p`
  font-size: 25px;
  margin: 10px 0;
`;

export const CastItemSubtitle = styled.strong`
  font-size: 18px;
  margin: 10px 0;
`;

export const CastItemCharacterName = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;
