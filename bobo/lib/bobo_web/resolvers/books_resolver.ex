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

  def update_book(_root, args, _info) do
    case Books.get_book(args.id) do
      nil ->
        {:error, "Book with id '#{args.id}' not found"}
      book ->
        case Books.update_book(book, args.book) do
          {:ok, new_book} ->
            {:ok, new_book}
          _error ->
            {:error, "Could not update '#{book.title}'"}
        end
    end
  end

  def delete_book(_root, args, _info) do
    case Books.get_book(args.id) do
      nil ->
        {:error, "Book with id '#{args.id}' not found"}
      book ->
        case Books.delete_book(book) do
          {:ok, empty_book} ->
            {:ok, empty_book}
          _error ->
            {:error, "Could not delete '#{book.title}' - perhaps it doesn't exist?"}
        end
    end
  end
end
