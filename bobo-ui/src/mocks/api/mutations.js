import { graphql } from 'msw';

export const CREATE_BOOK_MUTATION = graphql.mutation(
  'createBook',
  (_, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.data({
        id: 99,
        updatedAt: new Date(),
      }),
    );
  },
);

export const DELETE_BOOK_MUTATION = graphql.mutation(
  'deleteBook',
  (_, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.data({
        deleteBook: {
          title: "The Return of the King"
        }
      }),
    );
  },
);

export const EDIT_BOOK_MUTATION = graphql.mutation(
  'editBook',
  (_, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.data({
        editBook: {
          title: "The Return of the King"
        }
      })
    )
  }
)