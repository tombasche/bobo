import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetBooks {
          allBooks {
            title
            author
          }
        }
    `
  })
  .then(result => console.log(result));