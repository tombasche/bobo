import { useQuery, gql, useMutation } from '@apollo/client';

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

const createBookMutation = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $genres: [String]!
    $rating: Float!
    $comments: String
    $dateFinished: String!
  ) {
    createBook(
      title: $title
      author: $author
      genres: $genres
      rating: $rating
      comments: $comments
      dateFinished: $dateFinished
    ) {
      id
      title
      author
      rating
      genres
      comments
      dateFinished
      updatedAt
    }
  }
`;

export const useCreateBook = () =>
  useMutation(createBookMutation, { refetchQueries: ['allBooks'] });

const updateBookMutation = gql`
  mutation updateBook($id: ID!, $book: UpdateBook) {
    updateBook(id: $id, book: $book) {
      id
      title
      author
      rating
      genres
      comments
      dateFinished
      updatedAt
    }
  }
`;

export const useEditBook = () =>
  useMutation(updateBookMutation, { refetchQueries: ['allBooks'] });

const deleteBookMutation = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
      title
    }
  }
`;

interface DeletedBook {
  deleteBook: {
    title: string;
  };
}

type onCompletedDelete = (d: DeletedBook) => void;

export const useDeleteBook = (onCompleted: onCompletedDelete) =>
  useMutation(deleteBookMutation, {
    refetchQueries: ['allBooks'],
    onCompleted,
  });
