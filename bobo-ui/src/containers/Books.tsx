import React from 'react';

import Book from '../types/Book';
import { useAllBooks } from '../backend/book/queries';
import BookDisplay from '../components/BookDisplay';
import BookList from '../components/BookList';
import Loading from '../components/Loading';
import Error from '../components/Error';

export function Books() {
  const { loading, error, data } = useAllBooks();

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <BookList>
      {data.allBooks.map((book: Book) => (
        <BookDisplay book={book} key={book.id} />
      ))}
    </BookList>
  );
}
