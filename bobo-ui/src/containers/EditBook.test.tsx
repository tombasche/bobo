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

test('Able to open the edit modal with pre-filled fields', async () => {
  render(node);
  const bookContainer = await waitFor(() =>
    screen.getByText(/The Return of the King/).closest('div'),
  );
  fireEvent.click(bookContainer!);
  const editButton = getByLabelText(bookContainer!, 'edit');
  fireEvent.click(editButton);
  screen.getByText(/Edit Book/).closest('div');
});
