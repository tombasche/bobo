import React from 'react';
import { GlobalStyles } from './themes/themes';
import { ApolloProvider } from '@apollo/client';
import { Books } from './containers/Books';
import { client } from './query/ApolloClient';
import { Sidebar } from './components/Sidebar';
import Page from './components/Page';
import AddBook from './containers/AddBook';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Sidebar />
      <Page>
        <AddBook />
        <Books />
      </Page>
    </ApolloProvider>
  );
}

export default App;
