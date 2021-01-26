defmodule BoboWeb.BooksResolver do
  alias Bobo.Books

  def all_books(_root, _args, _info) do
    {:ok, Books.list_books()}
  end

  def single_book(_root, args, _info) do
    case Books.get_book(args.id) do
      nil ->
        {:error, "Book #{args.id} not found"}

      book ->
        {:ok, book}
    end
  end

  def search_books(_root, args, _info) do
    case Books.search_books(args.search_term) do
      books ->
        {:ok, books}

      _ ->
        {:error, "No results"}
    end
  end

  def create_book(_root, args, _info) do
    case Books.create_book(args) do
      {:ok, book} ->
        {:ok, book}

      {:error, r} ->
        {:error, "#{changeset_error_to_string(r)}"}
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

  defp changeset_error_to_string(changeset) do
    Ecto.Changeset.traverse_errors(changeset, fn {msg, opts} ->
      Enum.reduce(opts, msg, fn {key, value}, acc ->
        String.replace(acc, "%{#{key}}", to_string(value))
      end)
    end)
    |> Enum.reduce("", fn {k, v}, acc ->
      joined_errors = Enum.join(v, "; ")
      "#{acc}#{k}: #{joined_errors}. "
    end)
  end
end
