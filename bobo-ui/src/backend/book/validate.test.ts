import {clean, validate} from "./validate";

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

test('A valid book returns an "ok" response', () => {
    const expectedBook = {
        title: 'Twilight',
        author: 'Stephenie Meyer',
        genres: ['young adult', 'fiction', 'fantasy'],
        rating: 1,
        comments: '',
        dateFinished: '2020-01-01',
    }
    const okResult = {ok: true, value: expectedBook}
    expect(validate(expectedBook)).toEqual(okResult);
})

test('An invalid book returns an "error" response', () => {
    const expectedBook = {
        author: 'Stephenie Meyer',
        genres: ['young adult', 'fiction', 'fantasy'],
        rating: 1,
        comments: '',
        dateFinished: '2020-01-01',
        title: ""
    }
    const errorResult = {ok: false, message: {
        author: true,
        genres: true,
        rating: true,
        dateFinished: true,
        title: false
    }}
    expect(validate(expectedBook)).toEqual(errorResult);
})