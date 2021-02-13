import React, { SyntheticEvent } from 'react';
import { clean, validate } from '../backend/book/validate';
import { useCreateBook } from '../backend/book/queries';
import Add from '../components/Add';
import Modal from '../components/Modal';
import NewBookForm from '../components/NewBookForm';
import Book, { blankBook } from '../types/Book';

const AddBook = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [book, setBook] = React.useState<Book>(blankBook);
  const [addBook] = useCreateBook();

  const createBook = (e: React.FormEvent<HTMLFormElement>, b: Book) => {
    e.preventDefault();
    const result = validate(clean(b));
    if (!result.ok) return;
    addBook({ variables: result.value });
    reset();
  };

  const updateBook = (e: SyntheticEvent, field: string) => {
    console.log(e, field);
    const updatedBook = {
      ...book,
      [field]: (e.target as HTMLInputElement).value,
    };
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
