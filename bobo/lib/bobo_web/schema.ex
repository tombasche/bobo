defmodule BoboWeb.Schema do
  use Absinthe.Schema

  alias BoboWeb.BooksResolver

  object :book do
    field :id, non_null(:id)
    field :title, non_null(:string)
    field :author, non_null(:string)
  end

  query do
    @desc "Get all books"
    field :all_books, non_null(list_of(non_null(:book))) do
      resolve(&BooksResolver.all_books/3)
    end
  end

  mutation do
    @desc "Create a new book"
    field :create_book, :book do
      arg :title, non_null(:string)
      arg :author, non_null(:string)

      resolve(&BooksResolver.create_book/3)
    end
  end

end
