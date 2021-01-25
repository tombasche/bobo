import React from 'react';
import Book from '../data/Book';
import { Card } from 'antd';
import styled from 'styled-components';

interface BookDisplayProps {
  book: Book
}

const BookCard = styled(Card)`
  width: 450px;
  margin-bottom: 24px;
`;

export default function BookDisplay({ book }: BookDisplayProps) {
  return (
    <BookCard title={`${book.title} - ${book.author}`}>
      <p> Rated: {book.rating} # TODO render n stars here</p>
      <p> {book.comments} </p>
    </BookCard>
  )
}
