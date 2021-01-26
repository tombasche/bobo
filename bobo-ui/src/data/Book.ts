import { useQuery, gql } from '@apollo/client';

export default interface Book {
    id: number
    title: string
    author: string
    genres: string[]
    rating: number
    comments: string
    updatedAt: string
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
      updatedAt
    }
  }
`;

export const useAllBooks = () => useQuery(allBooksQuery);