import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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
  expect(screen.getByText(/Oh no/));
});
