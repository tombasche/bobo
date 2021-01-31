import React from 'react';
import { GlobalStyles } from './themes/themes';
import { ApolloProvider } from '@apollo/client';
import { Books } from './containers/Books';
import { client } from './query/ApolloClient';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Sidebar />
      <div>{<Books />}</div>
    </ApolloProvider>
  );
}

export default App;
