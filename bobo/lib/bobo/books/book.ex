defmodule Bobo.Books.Book do
  use Ecto.Schema
  import Ecto.Changeset

  schema "books" do
    field(:author, :string)
    field(:title, :string)
    field(:rating, :float)
    field(:genres, {:array, :string})
    field(:date_started, :date)
    field(:date_finished, :date)
    field(:comments, :string)

    timestamps()
  end

  @doc false
  def changeset(book, attrs) do
    book
    |> cast(attrs, [:title, :author, :rating, :genres, :date_started, :date_finished, :comments])
    |> validate_required([:title, :author, :rating, :genres, :date_finished])
    |> sort_genres()
  end

  defp sort_genres(changeset) do
    genres = get_change(changeset, :genres, [])
    put_change(changeset, :genres, Enum.sort(genres))
  end
end
