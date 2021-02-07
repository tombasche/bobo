import React from 'react';
import styled from 'styled-components';
import Book from '../types/Book';
import BookInputField from './BookInputField';

const BookForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

interface NewBookProps {
  book: Book;
  submit: (e: React.FormEvent<HTMLFormElement>, b: Book) => void;
  change: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
}

const NewBookForm = ({ book, submit, change }: NewBookProps) => {
  return (
    <BookForm onSubmit={(e) => submit(e, book)}>
      <label>
        Title
        <BookInputField name="title" value={book.title} change={change} />
      </label>
      <label>
        Author
        <BookInputField name="author" value={book.author} change={change} />
      </label>
      <input type="submit" value="Submit" />
    </BookForm>
  );
};

export default NewBookForm;
