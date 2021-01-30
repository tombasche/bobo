import { useQuery, gql } from '@apollo/client';

export default interface Book {
  id: number;
  title: string;
  author: string;
  genres: string[];
  rating: number;
  comments: string;
  updatedAt: string;
  dateFinished: string;
}
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
