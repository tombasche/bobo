import React from 'react';

import Book from '../types/Book';
import {
  useAllBooks,
  useDeleteBook,
  useEditBook,
} from '../backend/book/queries';
import BookDisplay from '../components/BookDisplay';
import BookList from '../components/BookList';
import Loading from '../components/loading/Loading';
import Error from '../components/Error';
import Message from '../components/Message';
import ConfirmDelete from '../components/ConfirmDelete';
import EditBook from '../components/EditBook';

export function Books() {
  const { loading, error, data } = useAllBooks();
  const [deletedBook, confirmDeleteBook] = React.useState<number | null>(null);
  const [editingBook, setEditingBook] = React.useState<Book | null>(null);
  const [deletedBookTitle, setDeletedBookTitle] = React.useState<string>('');

  const [deleteBook, { loading: isDeleting }] = useDeleteBook((data) => {
    setDeletedBookTitle(data.deleteBook.title);
  });

  const [submitBook, { loading: isSaving }] = useEditBook(() => {
    setEditingBook(null);
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
    <>
      <BookList>
        {deletedBookTitle && (
          <Message type="success" message={`Deleted ${deletedBookTitle}`} />
        )}
        {data.allBooks.map((book: Book) => (
          <BookDisplay
            book={book}
            key={book.id}
            editBook={() => {
              setEditingBook(book);
            }}
            deleteBook={() => {
              confirmDeleteBook(book.id);
            }}
          />
        ))}
      </BookList>
      {deletedBook && (
        <ConfirmDelete
          open={!!deletedBook}
          onConfirm={() => {
            deleteBook({ variables: { id: deletedBook } });
            confirmDeleteBook(null);
          }}
          onClose={() => confirmDeleteBook(null)}
        />
      )}
      {editingBook && (
        <EditBook
          bookToEdit={editingBook}
          isSaving={isSaving}
          submitBook={submitBook}
        />
      )}
    </>
  );
}
