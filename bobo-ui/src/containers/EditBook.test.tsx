import React from 'react';
import {
  render,
  waitFor,
  screen,
  fireEvent,
  getByLabelText,
  getByRole,
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

const openEditModal = async () => {
  render(node);
  const bookContainer = await waitFor(() =>
    screen.getByText(/The Return of the King/).closest('div'),
  );
  fireEvent.click(bookContainer!);
  const editButton = getByLabelText(bookContainer!, 'edit');
  fireEvent.click(editButton);
  return await waitFor(() => screen.getByText(/Edit Book/).closest('div'));
};

test('Able to open the edit modal with pre-filled fields', async () => {
  const editContainer = await openEditModal();
  expect(getByLabelText(editContainer!, 'title'));
  expect(getByLabelText(editContainer!, 'author'));
  expect(getByLabelText(editContainer!, 'rating'));
  expect(getByLabelText(editContainer!, 'genres'));
  expect(getByLabelText(editContainer!, 'dateFinished'));
});

test('Hitting the submit button works without error', async () => {
  const editContainer = await openEditModal();
  const submitButton = getByRole(editContainer!, 'button');
  fireEvent.click(submitButton);
  await waitFor(() =>
    expect(screen.queryByText(/Edit Book/)).not.toBeInTheDocument(),
  );
});
