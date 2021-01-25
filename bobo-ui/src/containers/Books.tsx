import React from 'react';

import Book, { allBooks } from '../data/Book';
import BookDisplay from '../components/BookDisplay';

export function Books() {
    const { loading, error, data } = allBooks();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.allBooks.map((book: Book) => (
        <BookDisplay book={book} />
    ));
}
