import React from 'react';
import styled from 'styled-components';

interface BookListProps {}

const CenteredDiv = styled.div`
  padding-top: 1em;
  display: flex;
  flex-flow: column;
  margin: auto;
  align-items: center;
`;

export const BookList: React.FC<BookListProps> = ({ children }) => (
  <CenteredDiv>{children}</CenteredDiv>
);
