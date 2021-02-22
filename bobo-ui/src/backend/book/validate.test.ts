import { clean, validate } from './validate';

test('Remove unwanted fields from the book object', () => {
  const book = {
    title: 'Twilight',
    author: 'Stephenie Meyer',
    id: 0,
    updatedAt: '',
    genres: ['young adult', 'fiction', 'fantasy'],
    rating: '1',
    comments: '',
    dateFinished: '2020-01-01',
  };

  const expectedBook = {
    title: 'Twilight',
    author: 'Stephenie Meyer',
    genres: ['young adult', 'fiction', 'fantasy'],
    rating: 1,
    comments: '',
    dateFinished: '2020-01-01',
  };
  expect(clean(book)).toEqual(expectedBook);
});

test('A valid book returns an "ok" response', () => {
  const validBook = {
    title: 'Twilight',
    author: 'Stephenie Meyer',
    genres: ['young adult', 'fiction', 'fantasy'],
    rating: 1,
    comments: '',
    dateFinished: '2020-01-01',
  };
  const okResult = { ok: true, value: validBook };
  expect(validate(validBook)).toEqual(okResult);
});

test('An invalid book returns an "error" response', () => {
  const invalidBook = {
    author: 'Stephenie Meyer',
    genres: ['young adult', 'fiction', 'fantasy'],
    rating: 1,
    comments: '',
    dateFinished: '2020-01-01',
    title: '',
  };
  const errorResult = {
    ok: false,
    message: {
      author: true,
      genres: true,
      rating: true,
      dateFinished: true,
      title: false,
    },
  };
  expect(validate(invalidBook)).toEqual(errorResult);
});

test('No genres specified is an "error"', () => {
  const book = {
    author: 'Stephenie Meyer',
    genres: [],
    rating: 1,
    comments: '',
    dateFinished: '2020-01-01',
    title: '',
  };
  const errorResult = {
    ok: false,
    message: {
      author: true,
      genres: false,
      rating: true,
      dateFinished: true,
      title: false,
    },
  };
  expect(validate(book)).toEqual(errorResult);
});
