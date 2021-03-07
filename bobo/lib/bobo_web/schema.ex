defmodule BoboWeb.Schema do
  use Absinthe.Schema

  alias BoboWeb.BooksResolver

  object :book do
    field(:id, non_null(:id))
    field(:title, non_null(:string))
    field(:author, non_null(:string))
    field(:rating, non_null(:float))
    field(:genres, list_of(:string))
    field(:date_finished, non_null(:string))
    field(:comments, :string)
    field(:updated_at, :string)
  end

  input_object :update_book do
    field(:title, :string)
    field(:author, :string)
    field(:rating, :float)
    field(:genres, list_of(:string))
    field(:date_finished, :string)
    field(:comments, :string)
  end

  query do
    @desc "Get all books"
    field :all_books, non_null(list_of(non_null(:book))) do
      resolve(&BooksResolver.all_books/3)
    end

    @desc "Get a single book by id"
    field :single_book, non_null(:book) do
      arg(:id, non_null(:id))
      resolve(&BooksResolver.single_book/3)
    end

    @desc "Search for a book by a search term"
    field :search_books, non_null(list_of(non_null(:book))) do
      arg(:search_term, non_null(:string))
      resolve(&BooksResolver.search_books/3)
    end
  end

  mutation do
    @desc "Create a new book"
    field :create_book, :book do
      arg(:title, non_null(:string))
      arg(:author, non_null(:string))
      arg(:date_finished, non_null(:string))
      arg(:genres, non_null(list_of(:string)))
      arg(:rating, non_null(:float))
      arg(:comments, :string)

      resolve(&BooksResolver.create_book/3)
    end

    @desc "Update an existing book by id"
    field :update_book, :book do
      arg(:id, non_null(:id))
      arg(:book, :update_book)

      resolve(&BooksResolver.update_book/3)
    end

    @desc "Delete a book"
    field :delete_book, :book do
      arg(:id, non_null(:id))
      resolve(&BooksResolver.delete_book/3)
    end
  end
end
