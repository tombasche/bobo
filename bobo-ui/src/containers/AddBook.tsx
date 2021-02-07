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
    // need to remove default 'id' field before submitting
    console.log(b);
  };

  const updateBook = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    const updatedBook = { ...book, [field]: e.currentTarget.value };
    setBook(updatedBook);
  };

  const onClose = () => {
    setModalIsOpen(false);
    setBook(blankBook);
  };

  return (
    <>
      <Add open={() => setModalIsOpen(true)} />
      <Modal title="Add Book" isOpen={modalIsOpen} close={onClose}>
        <NewBookForm book={book} submit={createBook} change={updateBook} />
      </Modal>
    </>
  );
};

export default AddBook;
