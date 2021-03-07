import React, { SyntheticEvent } from 'react';
import { clean, validate } from '../backend/book/validate';
import Modal from './Modal';
import BookForm from './form/BookForm';
import Book, { blankBook, withTodaysDate } from '../types/Book';
import any from '../helpers/Any';
import { useValidationErrors } from '../backend/book/formValidation';
import FormErrorMessage from './form/FormErrorMessage';
import { MutationTuple } from '@apollo/client';

interface EditBookProps {
  bookToEdit: Book;
  isOpen: boolean;
  closeModal: () => void;
  useSubmit: () => MutationTuple<any, Record<string, any>>;
}

const EditBook = ({
  bookToEdit,
  isOpen,
  closeModal,
  useSubmit,
}: EditBookProps) => {
  const [validationErrors, setValidationErrors] = useValidationErrors();
  const [book, setBook] = React.useState<Book>(bookToEdit);
  const [submitBook, { loading: isSaving }] = useSubmit();

  const createBook = (e: React.SyntheticEvent<HTMLFormElement>, b: Book) => {
    e.preventDefault();
    const result = validate(clean(b));
    if (!result.ok) {
      setValidationErrors(result.message);
      return;
    }
    const vars = { id: bookToEdit.id, book: result.value };
    submitBook({ variables: vars });
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
    setValidationErrors({});
    closeModal();
  };
  return (
    <>
      <Modal title="Edit Book" isOpen={isOpen || isSaving} close={reset}>
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

export default EditBook;
