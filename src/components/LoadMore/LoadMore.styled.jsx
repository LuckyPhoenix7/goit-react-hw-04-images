import styled from 'styled-components';

export const LoadMoreStyled = styled.button`
  background-color: #3f51b5;
  color: #fff;

  display: block;
  text-align: center;
  width: 130px;
  height: 50px;

  padding: 10px 20px;
  margin: 0 auto;

  cursor: pointer;

  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #283593;
  }
`;
