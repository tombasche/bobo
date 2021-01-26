import React from 'react';
import Book from '../data/Book';
import { Card } from './Card';
import { Rating } from './Rating';

interface BookDisplayProps {
  book: Book
}

export default function BookDisplay({ book }: BookDisplayProps) {
  return (
    <Card title={`${book.title} - ${book.author}`}>
      <p> Rated: {Rating(book.rating)}</p>
      <p> {book.comments} </p>
    </Card>
  )
}
