import { DateTime } from 'luxon';
import React from 'react';
import Book from '../data/Book';
import { DateDiff } from '../dateUtils/diff';
import { Card } from './Card';
import GenreDisplay from './GenreDisplay';
import { Rating } from './Rating';

interface BookDisplayProps {
  book: Book
}

export default function BookDisplay({ book }: BookDisplayProps) {
  console.log(DateTime.fromISO(book.updatedAt))
  return (
    <Card title={`${book.title} - ${book.author}`}>
      <p> Rated: {Rating(book.rating)}</p>
      <p> {book.comments} </p>
      <p>Updated {DateDiff(new Date(), DateTime.fromSQL(book.updatedAt).toJSDate())}</p>
      {<GenreDisplay genres={book.genres} />}
    </Card>
  )
}
