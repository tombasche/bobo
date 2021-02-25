import React from 'react';

import Book from '../types/Book';
import { useAllBooks, useDeleteBook } from '../backend/book/queries';
import BookDisplay from '../components/BookDisplay';
import BookList from '../components/BookList';
import Loading from '../components/loading/Loading';
import Error from '../components/Error';
import Message from '../components/Message';

export function Books() {
  const { loading, error, data } = useAllBooks();

  const [deletedBookTitle, setDeletedBookTitle] = React.useState<string>('');

  const [deleteBook, { loading: isDeleting }] = useDeleteBook((data) => {
    setDeletedBookTitle(data.deleteBook.title);
  });

  React.useEffect(() => {
    if (deletedBookTitle) {
      const timeout = setTimeout(() => {
        setDeletedBookTitle('');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [deletedBookTitle]);

  if (loading) return <Loading size="2x" />;
  if (error) return <Error />;

  return (
    <BookList>
      {deletedBookTitle && (
        <Message type="success" message={`Deleted ${deletedBookTitle}`} />
      )}
      {data.allBooks.map((book: Book) => (
        <BookDisplay
          book={book}
          key={book.id}
          deleteBook={() => {
            deleteBook({ variables: { id: book.id } });
          }}
        />
      ))}
    </BookList>
  );
}
