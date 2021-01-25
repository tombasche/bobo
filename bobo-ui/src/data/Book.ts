import { useQuery, gql } from '@apollo/client';


export default interface Book {
    id: number
    title: string
    author: string
}


const allBooksQuery = gql`
  query AllBooks {
    allBooks {
      id
      title
      author
    }
  }
`;

export const allBooks = () => useQuery(allBooksQuery);