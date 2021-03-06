import React from 'react';
import {
  render,
  waitFor,
  screen,
  fireEvent,
  getByLabelText,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { server } from '../mocks/server';
import { Books } from './Books';
import { ApolloProvider } from '@apollo/client';
import { client } from '../query/ApolloClient';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const node = (
  <ApolloProvider client={client}>
    <Books />
  </ApolloProvider>
);

test('Able to delete a book and click through the confirm', async () => {
  render(node);
  const bookContainer = await waitFor(() =>
    screen.getByText(/The Return of the King/).closest('div'),
  );
  fireEvent.click(bookContainer!);
  const deleteButton = getByLabelText(bookContainer!, 'delete');
  fireEvent.click(deleteButton);
  const confirmDialog = screen.getByText(/are you sure/i).closest('div');
  const confirmButton = getByLabelText(confirmDialog!, 'yes');
  fireEvent.click(confirmButton);
  await waitFor(() => screen.getByText(/Deleted/));
});

test('Able to go to delete a book and click "No" and not delete it', async () => {
  render(node);
  const bookContainer = await waitFor(() =>
    screen.getByText(/The Return of the King/).closest('div'),
  );
  fireEvent.click(bookContainer!);
  const deleteButton = getByLabelText(bookContainer!, 'delete');
  fireEvent.click(deleteButton);
  const confirmDialog = screen.getByText(/are you sure/i).closest('div');
  const noButton = getByLabelText(confirmDialog!, 'no');
  fireEvent.click(noButton);
  getByLabelText(confirmDialog!, 'no');
});
