import React from 'react';
import {
  render,
  fireEvent,
  screen,
  getByLabelText,
  getByText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import { server } from '../mocks/server';
import AddBook from './AddBook';
import { blankBook } from '../types/Book';
import { toEmoji } from '../components/Rating';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const node = (
  <MockedProvider>
    <AddBook />
  </MockedProvider>
);

const clickAdd = () => {
  fireEvent(
    screen.getByText(/Add/),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
};

const submitForm = () => {
  fireEvent.submit(screen.getByRole('button'));
};

test('Creating a book without all fields leaves the modal open', () => {
  render(node);
  clickAdd();
  submitForm();
  expect(screen.getByText(/Add Book/));
});

test('Creating a book without all fields pops up an error message', () => {
  render(node);
  clickAdd();
  submitForm();
  expect(screen.getByText(/missing/));
});

test('Creating a book without all fields, highlights those fields', () => {
  render(node);
  clickAdd();
  submitForm();
  const container = screen.getByText(/Add Book/).closest('div');

  const expectToHaveStyle = (label: string) => {
    expect(getByLabelText(container!, label)).toHaveStyle(`
      border: 1px solid red;
      box-shadow: 0 0 5px red;
  `);
  };

  expectToHaveStyle('title');
  expectToHaveStyle('author');
});

test('Rating has a default value upon opening the form', () => {
  render(node);
  clickAdd();
  submitForm();
  const defaultEmoji = toEmoji(blankBook.rating);
  expect(screen.getByText(defaultEmoji)).toHaveStyle(`
    opacity: 1;
  `);
});

test('Opening the modal doesnt cause fields to be highlighted', () => {
  render(node);
  clickAdd();
  const container = screen.getByText(/Add Book/).closest('div');
  expect(getByLabelText(container!, 'title')).not.toHaveStyle(`
    border: 1px solid red;
    box-shadow: 0 0 5px red;
  `);
});
