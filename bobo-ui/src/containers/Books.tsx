import { useQuery, gql } from '@apollo/client';


interface Book {
    id: number 
    title: string 
    author: string
}

const BOOKS = gql`
  query AllBooks {
    allBooks {
      id
      title
      author
    }
  }
`;

export function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allBooks.map((book: Book) => (
    <div key={book.id}>
      <p>
        {book.title}: {book.author}
      </p>
    </div>
  ));
}
