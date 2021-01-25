import { useQuery, gql } from '@apollo/client';

export default interface Book {
    id: number
    title: string
    author: string
    genres: string[]
    rating: number
    comments: string
}

const allBooksQuery = gql`
  query AllBooks {
    allBooks {
      id
      title
      author
      genres
      rating
      comments
    }
  }
`;

export const useAllBooks = () => useQuery(allBooksQuery);