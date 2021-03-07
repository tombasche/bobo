import React, { SyntheticEvent } from 'react';
import { clean, validate } from '../backend/book/validate';
import Add from './Add';
import Modal from './Modal';
import BookForm from './form/BookForm';
import Book, { blankBook, withTodaysDate } from '../types/Book';
import any from '../helpers/Any';
import { useValidationErrors } from '../backend/book/formValidation';
import FormErrorMessage from './form/FormErrorMessage';
import { MutationTuple } from '@apollo/client';

const AddBook = ({
  useSubmit,
}: {
  useSubmit: () => MutationTuple<any, Record<string, any>>;
}) => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useValidationErrors();
  const [book, setBook] = React.useState<Book>(withTodaysDate(blankBook));
  const [submitBook, { loading: isSaving }] = useSubmit();

  const createBook = (e: React.SyntheticEvent<HTMLFormElement>, b: Book) => {
    e.preventDefault();
    const result = validate(clean(b));
    if (!result.ok) {
      setValidationErrors(result.message);
      return;
    }
    submitBook({ variables: result.value });
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
        <BookForm
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
