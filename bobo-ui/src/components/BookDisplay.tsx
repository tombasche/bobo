import React from 'react';
import Book from '../data/Book';

interface BookDisplayProps {
  book: Book
}

export default function BookDisplay({ book }: BookDisplayProps) {
  return (
    <div key={book.id}>
      <p>
        {book.title}: {book.author}
      </p>
    </div>
  )
}
