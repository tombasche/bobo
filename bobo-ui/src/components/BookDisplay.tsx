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
import Delete from './Delete';
import styled from 'styled-components';

interface BookDisplayProps {
  book: Book;
  deleteBook: () => void;
}

const CornerFooter = styled.div`
  display: flex;
  flex-flow: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default function BookDisplay({ book, deleteBook }: BookDisplayProps) {
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
            <CornerFooter>
              <DateDeltaDisplay date={book.updatedAt} />
              <ButtonContainer>
                <Delete
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    deleteBook();
                  }}
                />
              </ButtonContainer>
            </CornerFooter>
          </CardFooter>
        </div>
      )}
    </ClickableCard>
  );
}
