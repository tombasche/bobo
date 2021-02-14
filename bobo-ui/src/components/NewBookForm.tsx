import React from 'react';
import styled from 'styled-components';
import Book from '../types/Book';
import BookInputField from './BookInputField';
import BookMultiSelectField from './BookMultiSelectField';
import BookSelectField from './BookSelectField';
import SubmitButton from './SubmitButton';

const BookForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  padding-right: 5px;
`;

interface NewBookProps {
  book: Book;
  submit: (e: React.FormEvent<HTMLFormElement>, b: Book) => void;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
}

const NewBookForm = ({ book, submit, change }: NewBookProps) => {
  return (
    <BookForm onSubmit={(e) => submit(e, book)}>
      <Field>
        <Label>Title</Label>
        <BookInputField name="title" value={book.title} change={change} />
      </Field>
      <Field>
        <Label>Author</Label>
        <BookInputField name="author" value={book.author} change={change} />
      </Field>
      <Field>
        <Label>Rating</Label>
        <BookSelectField
          name="rating"
          value={book.rating.toString()}
          options={['1', '2', '3', '4']}
          change={change}
        />
      </Field>
      <Field>
        <Label>Genres</Label>
        <BookMultiSelectField
          name="genres"
          values={book.genres}
          options={['Fantasy', 'Action', 'Non-fiction']}
          change={change}
        />
      </Field>
      <SubmitButton />
    </BookForm>
  );
};

export default NewBookForm;
