import React from 'react';
import Book from '../data/Book';

interface BookTitleProps {
  book: Book;
}

const BookTitle = ({ book }: BookTitleProps) => {
  return (
    <span>
      <h3>{`${book.title} - ${book.author}`}</h3>
    </span>
  );
};

export default BookTitle;
