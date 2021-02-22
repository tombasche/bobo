import { graphql } from 'msw';

export const CREATE_BOOK_MUTATION = graphql.mutation(
  'createBook',
  (_, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.data({
        data: {
          id: 99,
          updatedAt: new Date(),
        },
      }),
    );
  },
);
