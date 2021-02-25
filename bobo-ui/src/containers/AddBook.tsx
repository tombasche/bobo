import React, { SyntheticEvent } from 'react';
import { clean, validate } from '../backend/book/validate';
import { useCreateBook } from '../backend/book/queries';
import Add from '../components/Add';
import Modal from '../components/Modal';
import NewBookForm from '../components/form/NewBookForm';
import Book, { blankBook, withTodaysDate } from '../types/Book';
import any from '../helpers/Any';
import { useValidationErrors } from '../backend/book/formValidation';
import FormErrorMessage from '../components/form/FormErrorMessage';

const AddBook = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useValidationErrors();
  const [book, setBook] = React.useState<Book>(withTodaysDate(blankBook));
  const [addBook, { loading: isSaving }] = useCreateBook();

  const createBook = (e: React.SyntheticEvent<HTMLFormElement>, b: Book) => {
    e.preventDefault();
    const result = validate(clean(b));
    if (!result.ok) {
      setValidationErrors(result.message);
      return;
    }
    addBook({ variables: result.value });
    reset();
  };

  const updateBook = (e: SyntheticEvent, field: string) => {
    const updatedBook = {
      ...book,
      [field]: (e.target as HTMLInputElement).value,
    };
    setBook(updatedBook);
  };

  const reset = () => {
    setModalIsOpen(false);
    setBook(withTodaysDate(blankBook));
    setValidationErrors({});
  };
  return (
    <>
      <Add open={() => setModalIsOpen(true)} />
      <Modal title="Add Book" isOpen={modalIsOpen || isSaving} close={reset}>
        {any(validationErrors) && <FormErrorMessage />}
        <NewBookForm
          book={book}
          submit={createBook}
          change={updateBook}
          validFields={validationErrors}
          isSaving={isSaving}
        />
      </Modal>
    </>
  );
};

export default AddBook;
