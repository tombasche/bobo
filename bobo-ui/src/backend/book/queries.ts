import { useQuery, gql } from '@apollo/client';

const allBooksQuery = gql`
  query allBooks {
    allBooks {
      id
      title
      author
      genres
      rating
      comments
      updatedAt
      dateFinished
    }
  }
`;

export const useAllBooks = () => useQuery(allBooksQuery);
