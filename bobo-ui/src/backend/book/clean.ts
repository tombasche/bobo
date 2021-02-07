import Book from "../../types/Book";

export const clean = (b: Book) => {
    const {id, updatedAt, ...rest} = b;
    return rest;
};