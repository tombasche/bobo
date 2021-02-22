import { Result } from '../../types/Result';
import Book, { NewBook, RequiredBookFields } from '../../types/Book';
import all from '../../helpers/All';

export const clean = (b: Book) => {
  const { id, updatedAt, rating, ...rest } = b;
  return {
    ...rest,
    rating: parseInt(`${rating}`),
  };
};

export interface ValidFields {
  [field: string]: boolean;
}

export const validate = (b: NewBook): Result<NewBook, ValidFields> => {
  const message = validateBook(b);
  if (!all<ValidFields>(message)) return { ok: false, message };
  return { ok: true, value: b };
};

const validateBook = (b: NewBook): ValidFields => {
  return RequiredBookFields.reduce((obj: ValidFields, e: string) => {
    obj[e] = hasField(b, e);
    return obj;
  }, {});
};

type KeyableNewBook = NewBook & { [key: string]: string | number | string[] };

const hasField = (b: KeyableNewBook, field: string): boolean => {
  const value = b[field];
  let fieldExists = b.hasOwnProperty(field) && !!value;
  if (isStringArray(value)) fieldExists = fieldExists && containsValues(value);
  return fieldExists;
};

const containsValues = (v: string[] | string | number): boolean => {
  return typeof v === 'object' && v.length > 0;
};

const isStringArray = (v: string[] | string | number): v is string[] => {
  return typeof v === 'object';
};
