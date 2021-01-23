defmodule BoboWeb.BooksResolver do
  alias Bobo.Books

  def all_books(_root, _args, _info) do
    {:ok, Books.list_books()}
  end

  def create_book(_root, args, _info) do
    case Books.create_book(args) do
      {:ok, book} ->
        {:ok, book}
      _error ->
        {:error, "Could not create book :("}
    end
  end
end
