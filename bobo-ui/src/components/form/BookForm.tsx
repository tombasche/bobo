import React from 'react';
import { ValidFields } from '../../backend/book/validate';
import GENRES from '../../data/genres';
import Book from '../../types/Book';
import BookInputField from './BookInputField';
import BookMultiSelectField from './BookMultiSelectField';
import SelectRating from './SelectRating';
import SubmitButton from './SubmitButton';
import Form from './Form';
import Field from './Field';
import Fields from './Fields';
import Label from './Label';

type FieldChangeEvent = (
  e: React.SyntheticEvent<HTMLElement>,
  field: string,
) => void;

interface BookFormProps {
  book: Book;
  submit: (e: React.FormEvent<HTMLFormElement>, b: Book) => void;
  change: FieldChangeEvent;
  validFields: ValidFields;
  isSaving: boolean;
}

const hasError = (validFields: ValidFields, field: string): boolean => {
  return validFields[field] !== undefined && !validFields[field];
};

const BookForm = ({
  book,
  submit,
  change,
  validFields,
  isSaving,
}: BookFormProps) => {
  return (
    <Form onSubmit={(e) => submit(e, book)}>
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
      <SubmitButton isSaving={isSaving} />
    </Form>
  );
};

export default BookForm;
