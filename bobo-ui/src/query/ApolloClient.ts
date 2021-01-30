import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: process.env.REACT_APP_BACKEND,
  fetch: (...args) => fetch(...args),
});

export const client = new ApolloClient({
  cache,
  link,
});
