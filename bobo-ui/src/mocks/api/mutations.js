import { graphql } from 'msw';

export const CREATE_BOOK_MUTATION = graphql.mutation(
  'createBook',
  (_, res, ctx) => {
    // const { title, author, genres, rating, dateFinished } = req.variables;
    return res(
      ctx.data({
        data: {
          id: 99,
          updatedAt: new Date(),
        },
      }),
    );
  },
);
