import { LoadMoreStyled } from './LoadMore.styled';

export const LoadMore = ({ onClick, children }) => (
  <LoadMoreStyled onClick={onClick}>{children}</LoadMoreStyled>
);
