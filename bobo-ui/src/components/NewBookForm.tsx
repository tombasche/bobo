import React from 'react';
import styled from 'styled-components';
import { ValidFields } from '../backend/book/validate';
import Book from '../types/Book';
import BookInputField from './BookInputField';
import BookMultiSelectField from './BookMultiSelectField';
import SelectRating from './SelectRating';
import SubmitButton from './SubmitButton';

const BookForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  height: 100%;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Fields = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column;
`;

const Label = styled.label`
  padding-right: 5px;
`;

const BottomLeft = styled.div`
  position: absolute;
  top: 85%;
`;

interface NewBookProps {
  book: Book;
  submit: (e: React.FormEvent<HTMLFormElement>, b: Book) => void;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
  errors: ValidFields;
}

const NewBookForm = ({ book, submit, change, errors }: NewBookProps) => {
  return (
    <BookForm onSubmit={(e) => submit(e, book)}>
      <Fields>
        <Field>
          <Label>Title</Label>
          <BookInputField
            name="title"
            value={book.title}
            change={change}
            error={false}
          />
        </Field>
        <Field>
          <Label>Author</Label>
          <BookInputField
            name="author"
            value={book.author}
            change={change}
            error={false}
          />
        </Field>
        <Field>
          <Label>Rating</Label>
          <SelectRating
            name="rating"
            value={book.rating.toString()}
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
      </Fields>
      <BottomLeft>
        <SubmitButton />
      </BottomLeft>
    </BookForm>
  );
};

export default NewBookForm;
