import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  background-color: #f2e9eb;
  padding: 15px 10px;
`;

export const ReviewsTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 50px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  margin: 0;
  list-style: none;
`;

export const ReviewsItem = styled.li`
  background-color: #f7f7f7;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  box-shadow: 1px 9px 28px -13px rgba(189, 182, 189, 1);
  transition: box-shadow 200ms linear, transform 200ms linear;

  &:hover {
    box-shadow: 0px 27px 23px -9px rgba(189, 182, 189, 1);
    transform: translateY(-7px);
  }
`;

export const ReviewsItemTitle = styled.h3`
  font-size: 25px;
  margin: 0;
  margin-bottom: 15px;
`;

export const ReviewsItemText = styled.p`
  font-size: 15px;
  margin: 0;
`;

export const NoReviewsMessage = styled.p`
  font-size: 20px;
  color: red;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
