import React from 'react';
import styled from 'styled-components';
import Book from '../types/Book';
import { lowResDateDiff } from '../dateUtils/diff';
import { parseSimpleDateToDate } from '../dateUtils/parse';

interface BookTitleProps {
  book: Book;
}

const Title = styled.h3`
  display: inline;
`;

const TitleInfo = styled.span`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

const BookTitle = ({ book }: BookTitleProps) => {
  const now = new Date();
  const then = parseSimpleDateToDate(book.dateFinished);
  return (
    <TitleInfo>
      <Title>{`${book.title} - ${book.author}`}</Title>
      <span>Finished {lowResDateDiff(now, then)}</span>
    </TitleInfo>
  );
};

export default BookTitle;
