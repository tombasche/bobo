import React from 'react';
import Book from '../data/Book';
import { Card } from './Card';

interface BookDisplayProps {
  book: Book
}

export default function BookDisplay({ book }: BookDisplayProps) {
  return (
    <Card title={`${book.title} - ${book.author}`}>
      <p> Rated: {book.rating} # TODO render n stars here</p>
      <p> {book.comments} </p>
    </Card>
  )
}
