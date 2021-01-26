import React from 'react';
import Book from '../data/Book';
import { diffDate } from '../dateUtils/diff';
import { parseServerDate } from '../dateUtils/parse';
import { Card } from './Card';
import { CardFooter } from './CardFooter';
import DateDeltaDisplay from './DateDeltaDisplay';
import GenreDisplay from './GenreDisplay';
import { Rating } from './Rating';

interface BookDisplayProps {
  book: Book
}

export default function BookDisplay({ book }: BookDisplayProps) {
  return (
    <Card title={`${book.title} - ${book.author}`}>
      <p> Rated: {Rating(book.rating)}</p>
      <p> {book.comments} </p>
      <CardFooter>
        <GenreDisplay genres={book.genres} />
        <DateDeltaDisplay date={book.updatedAt} />
      </CardFooter>

    </Card>
  )
}
