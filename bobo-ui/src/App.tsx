import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { ApolloProvider } from '@apollo/client';
import { Books } from './containers/Books';

const client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND,
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