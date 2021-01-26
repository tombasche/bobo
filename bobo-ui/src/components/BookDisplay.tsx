import React from 'react';
import Book from '../data/Book';
import { parseSimpleDate } from '../dateUtils/parse';
import Card from './Card';
import CardFooter from './CardFooter';
import DateDeltaDisplay from './DateDeltaDisplay';
import GenreDisplay from './GenreDisplay';
import Rating from './Rating';

interface BookDisplayProps {
  book: Book
}

export default function BookDisplay({ book }: BookDisplayProps) {
  return (
    <Card title={`${book.title} - ${book.author}`}>
      <p> Rated: {Rating(book.rating)}</p>
      {/* <p> {book.comments} </p> */}
      <p> Read: {parseSimpleDate(book.dateFinished)}</p>
      <CardFooter>
        <GenreDisplay genres={book.genres} />
        <DateDeltaDisplay date={book.updatedAt} />
      </CardFooter>

    </Card>
  )
}
