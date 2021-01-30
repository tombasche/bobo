import React, { useState } from 'react';
import Book from '../data/Book';
import { parseSimpleDate } from '../dateUtils/parse';
import BookComments from './BookComments';
import Card from './Card';
import CardFooter from './CardFooter';
import DateDeltaDisplay from './DateDeltaDisplay';
import GenreDisplay from './GenreDisplay';
import Rating from './Rating';

interface BookDisplayProps {
  book: Book;
}

export default function BookDisplay({ book }: BookDisplayProps) {
  const [showingDetail, isShowingDetail] = useState<boolean>(false);

  return (
    <Card
      title={`${book.title} - ${book.author}`}
      onClick={() => isShowingDetail(!showingDetail)}
      expanded={showingDetail}
    >
      {showingDetail ? (
        <div>
          <p> Rated: {Rating(book.rating)}</p>
          <BookComments comments={book.comments} />
          <p> Read: {parseSimpleDate(book.dateFinished)}</p>
          <CardFooter>
            <GenreDisplay genres={book.genres} />
            <DateDeltaDisplay date={book.updatedAt} />
          </CardFooter>
        </div>
      ) : null}
    </Card>
  );
}
