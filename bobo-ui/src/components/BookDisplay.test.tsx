import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import Book from '../types/Book';
import BookDisplay from './BookDisplay';

const exampleBook: Book = {
  author: 'J.R.R. Tolkien',
  comments: 'Lots of talk of food',
  dateFinished: '2020-01-03',
  genres: ['fantasy', 'fiction'],
  id: 2,
  rating: 5,
  title: 'The Return of the King',
  updatedAt: '2021-01-26 03:28:58',
};

test('Clicking on a card shows extra detail', async () => {
  render(<BookDisplay book={exampleBook} key={exampleBook.id} />);

  const element = screen.getByText(/The Return of the King/);
  fireEvent.click(element);

  expect(screen.getByText(/Comments/)).toHaveTextContent(
    'Lots of talk of food',
  );
});
