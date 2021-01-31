import React from 'react';
import styled from 'styled-components';
import Book from '../data/Book';
import { diffDate } from '../dateUtils/diff';
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
  return (
    <TitleInfo>
      <Title>{`${book.title} - ${book.author}`}</Title>
      <span>
        Added {diffDate(new Date(), parseSimpleDateToDate(book.dateFinished))}
      </span>
    </TitleInfo>
  );
};

export default BookTitle;
