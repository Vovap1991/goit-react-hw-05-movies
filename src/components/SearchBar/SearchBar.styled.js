import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: #659493;
  border-radius: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 7px;
`;

export const SearchBarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const SearchBarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 40px;
  color: #0a0909;
  border-radius: 10px;
  background-color: #ffc0cb;
  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #ff4500;
  }
`;

export const SearchBarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font-size: 16px;
    color: #757373;
  }
`;

export const SearchBarSpan = styled.span`
  padding: 10px;
  font-size: 18px;
  color: black;
  font-weight: 500;
`;
