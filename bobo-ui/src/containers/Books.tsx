import React from 'react';

import Book from '../types/Book';
import { useAllBooks } from '../backend/book/queries';
import BookDisplay from '../components/BookDisplay';
import BookList from '../components/BookList';

export function Books() {
  const { loading, error, data } = useAllBooks();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <BookList>
      {data.allBooks.map((book: Book) => (
        <BookDisplay book={book} key={book.id} />
      ))}
    </BookList>
  );
}
