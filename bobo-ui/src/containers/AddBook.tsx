import React from 'react';
import Add from '../components/Add';
import Modal from '../components/Modal';
import NewBookForm from '../components/NewBookForm';
import Book, { blankBook } from '../types/Book';

const AddBook = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [book, updateBook] = React.useState<Book>(blankBook);

  const createBook = (e: React.FormEvent<HTMLFormElement>, b: Book) => {
    e.preventDefault();
    updateBook(b);
  };

  return (
    <>
      <Add open={() => setModalIsOpen(true)} />
      <Modal
        title="Add Book"
        isOpen={modalIsOpen}
        close={() => setModalIsOpen(false)}
      >
        <NewBookForm book={book} submit={createBook} />
      </Modal>
    </>
  );
};

export default AddBook;
