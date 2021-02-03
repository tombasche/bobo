import { graphql } from 'msw';

export const ALL_BOOKS_QUERY = graphql.query('allBooks', (req, res, ctx) => {
  return res(
    ctx.data({
      allBooks: [
        {
          author: 'J.R.R. Tolkien',
          comments: 'Lots of talk of food',
          dateFinished: '2020-01-03',
          genres: ['fantasy', 'fiction'],
          id: '2',
          rating: 5,
          title: 'The Return of the King',
          updatedAt: '2021-01-26 03:28:58',
        },
        {
          author: 'Tom',
          comments: null,
          dateFinished: '2020-01-01',
          genres: ['fantasy', 'fiction'],
          id: '3',
          rating: 3,
          title: 'Example',
          updatedAt: '2021-01-26 03:42:35',
        },
        {
          author: 'Tom',
          comments: null,
          dateFinished: '2020-01-01',
          genres: ['fantasy', 'fiction'],
          id: '4',
          rating: 3,
          title: 'New book',
          updatedAt: '2021-01-26 05:34:31',
        },
        {
          author: 'Tom',
          comments: null,
          dateFinished: '2020-01-01',
          genres: ['fantasy', 'fiction'],
          id: '5',
          rating: 3,
          title: 'Newer book',
          updatedAt: '2021-01-26 08:40:32',
        },
        {
          author: 'Lucy Knisley',
          comments: 'Great read!',
          dateFinished: '2019-04-20',
          genres: ['food', 'graphic novel', 'non-fiction'],
          id: '1',
          rating: 4,
          title: 'Relish',
          updatedAt: '2021-01-26 03:28:58',
        },
      ],
    }),
  );
});
