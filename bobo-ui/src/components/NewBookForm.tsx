import React from 'react';
import styled from 'styled-components';
import Book from '../types/Book';

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
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={(e) => change(e, 'title')}
        />
      </label>
      <input type="submit" value="Submit" />
    </BookForm>
  );
};

export default NewBookForm;
