import React from 'react';
import Add from '../components/Add';
import Modal from '../components/Modal';
import NewBookForm from '../components/NewBookForm';
import Book, { blankBook } from '../types/Book';

const AddBook = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [book, setBook] = React.useState<Book>(blankBook);

  const createBook = (e: React.FormEvent<HTMLFormElement>, b: Book) => {
    e.preventDefault();
    // need to remove default 'id' field and 'updatedAt' before submitting
    console.log(b);
    reset();
  };

  const updateBook = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    const updatedBook = { ...book, [field]: e.currentTarget.value };
    setBook(updatedBook);
  };

  const reset = () => {
    setModalIsOpen(false);
    setBook(blankBook);
  };

  return (
    <>
      <Add open={() => setModalIsOpen(true)} />
      <Modal title="Add Book" isOpen={modalIsOpen} close={reset}>
        <NewBookForm book={book} submit={createBook} change={updateBook} />
      </Modal>
    </>
  );
};

export default AddBook;
