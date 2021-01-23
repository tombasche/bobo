defmodule BoboWeb.BooksResolver do
  alias Bobo.Books

  def all_books(_root, _args, _info) do
    {:ok, Books.list_books()}
  end
end
