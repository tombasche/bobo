import React from 'react';
import styled from 'styled-components';
import { ValidFields } from '../backend/book/validate';
import GENRES from '../data/genres';
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
  flex-flow: column;
  margin: 0 0 5px 5px;
  width: 100%;
`;

const Fields = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 0.4em;
  font-weight: 500;
  color: #001e32;
`;

const BottomLeft = styled.div`
  position: absolute;
  top: 85%;
`;

interface NewBookProps {
  book: Book;
  submit: (e: React.FormEvent<HTMLFormElement>, b: Book) => void;
  change: (e: React.SyntheticEvent<HTMLElement>, field: string) => void;
  validFields: ValidFields;
}

const hasError = (validFields: ValidFields, field: string): boolean => {
  return validFields.title !== undefined && !validFields.title;
};

const NewBookForm = ({ book, submit, change, validFields }: NewBookProps) => {
  return (
    <BookForm onSubmit={(e) => submit(e, book)}>
      <Fields>
        <Field>
          <Label htmlFor="title">Title</Label>
          <BookInputField
            name="title"
            value={book.title}
            change={change}
            error={hasError(validFields, 'title')}
          />
        </Field>
        <Field>
          <Label htmlFor="author">Author</Label>
          <BookInputField
            name="author"
            value={book.author}
            change={change}
            error={hasError(validFields, 'author')}
          />
        </Field>
        <Field>
          <Label htmlFor="rating">Rating</Label>
          <SelectRating
            name="rating"
            value={book.rating.toString()}
            change={change}
          />
        </Field>
        <Field>
          <Label htmlFor="genres">Genres</Label>
          <BookMultiSelectField
            name="genres"
            values={book.genres}
            options={GENRES}
            change={change}
            error={hasError(validFields, 'genres')}
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
