defmodule Bobo.Books.Book do
  use Ecto.Schema
  import Ecto.Changeset

  schema "books" do
    field(:author, :string)
    field(:title, :string)
    field(:rating, :float)
    field(:genres, {:array, :string})
    field(:date_finished, :date)
    field(:comments, :string)

    timestamps()
  end

  @doc false
  def changeset(book, attrs) do
    book
    |> cast(attrs, [:title, :author, :rating, :genres, :date_finished, :comments])
    |> validate_required([:title, :author, :rating, :genres, :date_finished])
  end
end
