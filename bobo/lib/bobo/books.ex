defmodule Bobo.Books do
  @moduledoc """
  The Books context.
  """

  alias Bobo.Books.Book
  alias Bobo.Repo
  import Ecto.Query, only: [from: 2]

  def list_books do
    Repo.all(from(b in Book, order_by: [desc: b.date_finished]))
  end

  @doc """
  Gets a single book.

  Raises `Ecto.NoResultsError` if the Book does not exist.

  ## Examples

      iex> get_book!(123)
      %Book{}

      iex> get_book!(456)
      ** (Ecto.NoResultsError)

  """
  def get_book!(id), do: Repo.get!(Book, id)

  def get_book(id), do: Repo.get(Book, id)

  @doc """
  Creates a book.

  ## Examples

      iex> create_book(%{field: value})
      {:ok, %Book{}}

      iex> create_book(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_book(attrs \\ %{}) do
    %Book{}
    |> Book.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a book.

  ## Examples

      iex> update_book(book, %{field: new_value})
      {:ok, %Book{}}

      iex> update_book(book, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_book(%Book{} = book, attrs) do
    book
    |> Book.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a book.

  ## Examples

      iex> delete_book(book)
      {:ok, %Book{}}

      iex> delete_book(book)
      {:error, %Ecto.Changeset{}}

  """
  def delete_book(%Book{} = book) do
    Repo.delete(book)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking book changes.

  ## Examples

      iex> change_book(book)
      %Ecto.Changeset{data: %Book{}}

  """
  def change_book(%Book{} = book, attrs \\ %{}) do
    Book.changeset(book, attrs)
  end

  @doc """
  Returns a list of books by search term.

  ## Examples

      iex> search_books("The Fellowship of the Ring")
      [%Book{}, ...]

  """
  def search_books(search_term) do
    filters = Keyword.new([:title, :author], fn x -> {x, search_term} end)

    query =
      Enum.reduce(filters, Book, fn {key, value}, query ->
        from(q in query, or_where: ilike(fragment("lower(?)", field(q, ^key)), ^"%#{value}%"))
      end)

    Repo.all(query)
  end
end
