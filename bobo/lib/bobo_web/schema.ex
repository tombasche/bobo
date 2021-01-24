defmodule BoboWeb.Schema do
  use Absinthe.Schema

  alias BoboWeb.BooksResolver

  object :book do
    field :id, non_null(:id)
    field :title, non_null(:string)
    field :author, non_null(:string)
    field :rating, non_null(:float)
    field :genres, list_of(:string)
    field :date_finished, non_null(:string)
    field :date_started, :string
    field :comments, :string
  end

  input_object :update_book do
    field :title, :string
    field :author, :string
    field :rating, :float
    field :genres, list_of(:string)
    field :date_finished, :string
    field :date_started, :string
    field :comments, :string
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
      arg(:title, non_null(:string))
      arg(:author, non_null(:string))

      resolve(&BooksResolver.create_book/3)
    end

    @desc "Update an existing book by id"
    field :update_book, :book do
      arg(:id, non_null(:id))
      arg(:book, :update_book)

      resolve(&BooksResolver.update_book/3)
    end

  end

end
