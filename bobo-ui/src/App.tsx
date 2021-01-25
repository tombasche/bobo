import React from 'react';
import { render } from 'react-dom';

import { ApolloClient, InMemoryCache } from '@apollo/client';

import { ApolloProvider } from '@apollo/client';
import { Books } from './containers/Books';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div>
      {<Books />}
      </div>
    </ApolloProvider>
  );
}

export default App;