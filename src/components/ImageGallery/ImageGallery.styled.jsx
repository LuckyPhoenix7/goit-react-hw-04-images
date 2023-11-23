import styled from 'styled-components';

export const GalleryStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0;
  margin: 0;

  list-style: none;
`;

export const ItemStyled = styled.li`
  width: 300px;
  height: 200px;
  overflow: hidden;

  margin: 8px;
  flex-basis: calc(25% - 16px);

  border: 1px solid #ddd;
  border-radius: 8px;
`;
