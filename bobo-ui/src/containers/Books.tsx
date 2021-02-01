import React from 'react';

import Book, { useAllBooks } from '../data/Book';
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
