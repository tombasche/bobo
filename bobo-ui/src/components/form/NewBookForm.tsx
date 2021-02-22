import React from 'react';
import styled from 'styled-components';
import { ValidFields } from '../../backend/book/validate';
import GENRES from '../../data/genres';
import Book from '../../types/Book';
import BookInputField from './BookInputField';
import BookMultiSelectField from './BookMultiSelectField';
import SelectRating from './SelectRating';
import SubmitButton from './SubmitButton';
import BookForm from './BookForm';
import Field from './Field';
import Fields from './Fields';
import Label from './Label';

const BottomLeft = styled.div`
  position: absolute;
  top: 85%;
`;

type FieldChangeEvent = (
  e: React.SyntheticEvent<HTMLElement>,
  field: string,
) => void;

interface NewBookProps {
  book: Book;
  submit: (e: React.FormEvent<HTMLFormElement>, b: Book) => void;
  change: FieldChangeEvent;
  validFields: ValidFields;
}

const hasError = (validFields: ValidFields, field: string): boolean => {
  return validFields[field] !== undefined && !validFields[field];
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
        <Field>
          <Label htmlFor="dateFinished">Date Finished</Label>
          <BookInputField
            name="dateFinished"
            value={book.dateFinished}
            change={change}
            error={hasError(validFields, 'dateFinished')}
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
