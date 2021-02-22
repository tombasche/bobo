import React, { useState } from 'react';
import Book from '../types/Book';
import { parseSimpleDate } from '../dateUtils/parse';
import BookComments from './BookComments';
import BookTitle from './BookTitle';
import ClickableCard from './card/ClickableCard';
import CardFooter from './card/CardFooter';
import DateDeltaDisplay from './DateDeltaDisplay';
import GenreDisplay from './GenreDisplay';
import Rating from './Rating';

interface BookDisplayProps {
  book: Book;
}

export default function BookDisplay({ book }: BookDisplayProps) {
  const [showingDetail, isShowingDetail] = useState<boolean>(false);

  return (
    <ClickableCard
      title={<BookTitle book={book} />}
      onClick={() => isShowingDetail(!showingDetail)}
      expanded={showingDetail}
    >
      {showingDetail && (
        <div>
          <p> Rated: {Rating(book.rating)}</p>
          <BookComments comments={book.comments} />
          <p> Read: {parseSimpleDate(book.dateFinished)}</p>
          <CardFooter>
            <GenreDisplay genres={book.genres} />
            <DateDeltaDisplay date={book.updatedAt} />
          </CardFooter>
        </div>
      )}
    </ClickableCard>
  );
}
