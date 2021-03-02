import React from 'react';
import { GlobalStyles } from './themes/themes';
import { ApolloProvider } from '@apollo/client';
import { Books } from './containers/Books';
import { client } from './query/ApolloClient';
import { Sidebar } from './components/Sidebar';
import Page from './components/Page';
import AddBook from './containers/AddBook';
import { useCreateBook } from './backend/book/queries';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Sidebar />
      <Page>
        <AddBook useSubmit={useCreateBook} />
        <Books />
      </Page>
    </ApolloProvider>
  );
}

export default App;
