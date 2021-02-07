import { clean } from "./clean";

test('Remove unwanted fields from the book object', () => {
    const book = {
        title: 'Twilight',
        author: 'Stephenie Meyer',
        id: 0,
        updatedAt: '',
        genres: ['young adult', 'fiction', 'fantasy'],
        rating: 1,
        comments: '',
        dateFinished: '2020-01-01',
    }

    const expectedBook = {
        title: 'Twilight',
        author: 'Stephenie Meyer',
        genres: ['young adult', 'fiction', 'fantasy'],
        rating: 1,
        comments: '',
        dateFinished: '2020-01-01',
    }   
    expect(clean(book)).toEqual(expectedBook);

})