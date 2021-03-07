import { serialiseJSDate } from '../dateUtils/parse';

export default interface Book {
  id: number;
  title: string;
  author: string;
  genres: string[];
  rating: number;
  comments: string;
  updatedAt: string;
  dateFinished: string;
  __typename?: string;
}

export type NewBook = {
  title: string;
  author: string;
  genres: string[];
  rating: number;
  comments: string;
  dateFinished: string;
};

export const RequiredBookFields = [
  'title',
  'author',
  'genres',
  'rating',
  'dateFinished',
];

export const blankBook: Book = {
  id: 0,
  title: '',
  author: '',
  genres: [],
  rating: 3,
  comments: '',
  updatedAt: '',
  dateFinished: '',
};

export const withTodaysDate = (b: Book) => {
  return {
    ...b,
    dateFinished: serialiseJSDate(new Date()),
  };
};
