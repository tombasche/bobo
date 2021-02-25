import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
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

test('Render a list of books', async () => {
  render(node);
  await waitFor(() => screen.getAllByText(/The Return of the King/));
});
