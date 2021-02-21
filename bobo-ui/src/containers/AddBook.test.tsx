import React from 'react';
import {
  render,
  fireEvent,
  screen,
  getByLabelText,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';

import { server } from '../mocks/server';
import AddBook from './AddBook';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const node = (
  <MockedProvider>
    <AddBook />
  </MockedProvider>
);

test('Creating a book without all fields leaves the modal open', () => {
  render(node);
  fireEvent(
    screen.getByText(/Add/),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  fireEvent.submit(screen.getByRole('button'));
  expect(screen.getByText(/Add Book/));
});

test('Creating a book without all fields pops up an error message', () => {
  render(node);
  fireEvent(
    screen.getByText(/Add/),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  fireEvent.submit(screen.getByRole('button'));
  expect(screen.getByText(/missing/));
});

test('Creating a book without all fields, highlights those fields', () => {
  render(node);
  fireEvent(
    screen.getByText(/Add/),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  fireEvent.submit(screen.getByRole('button'));
  const container = screen.getByText(/Add Book/).closest('div');
  expect(getByLabelText(container!, 'title')).toHaveStyle(`
    border: 1px solid red;
    box-shadow: 0 0 5px red;
  `);
});

test('Opening the modal doesnt cause fields to be highlighted', () => {
  render(node);
  fireEvent(
    screen.getByText(/Add/),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  const container = screen.getByText(/Add Book/).closest('div');
  expect(getByLabelText(container!, 'title')).not.toHaveStyle(`
    border: 1px solid red;
    box-shadow: 0 0 5px red;
  `);
});
