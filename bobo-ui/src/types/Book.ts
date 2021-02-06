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

export const blankBook: Book = {
  id: 0,
  title: '',
  author: '',
  genres: [],
  rating: 0,
  comments: '',
  updatedAt: '',
  dateFinished: '',
}