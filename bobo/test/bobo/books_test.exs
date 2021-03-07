defmodule Bobo.BooksTest do
  use Bobo.DataCase

  alias Bobo.Books

  describe "books" do
    alias Bobo.Books.Book

    @valid_attrs %{
      author: "some author",
      comments: "some comments",
      date_finished: ~D[2010-04-17],
      date_started: ~D[2010-04-17],
      genres: ["fantasy", "crime"],
      rating: 3,
      title: "Fantasy"
    }
    @update_attrs %{
      author: "some updated author",
      comments: "some updated comments",
      date_finished: ~D[2011-05-18],
      date_started: ~D[2011-05-18],
      genres: ["fiction", "crime"],
      rating: 4,
      title: "Crime"
    }
    @invalid_attrs %{
      author: nil,
      comments: nil,
      date_finished: nil,
      date_started: nil,
      genres: nil,
      rating: nil,
      title: nil
    }

    def book_fixture(attrs \\ %{}) do
      {:ok, book} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Books.create_book()

      book
    end

    test "list_books/0 returns all books" do
      assert length(Books.list_books()) > 0
    end

    test "list_books/0 orders books by latest first" do
      [latest | rest] = Books.list_books()
      assert Date.compare(latest.date_finished, List.first(rest).date_finished) == :gt
    end

    test "get_book!/1 returns the book with given id" do
      book = book_fixture()
      assert Books.get_book!(book.id) == book
    end

    test "create_book/1 with valid data creates a book" do
      assert {:ok, %Book{} = book} = Books.create_book(@valid_attrs)
      assert book.author == "some author"
      assert book.comments == "some comments"
      assert book.date_finished == ~D[2010-04-17]
      assert book.date_started == ~D[2010-04-17]
      assert book.genres == ["fantasy", "crime"]
      assert book.rating == 3
      assert book.title == "Fantasy"
    end

    test "create_book/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Books.create_book(@invalid_attrs)
    end

    test "update_book/2 with valid data updates the book" do
      book = book_fixture()
      assert {:ok, %Book{} = book} = Books.update_book(book, @update_attrs)
      assert book.author == "some updated author"
      assert book.comments == "some updated comments"
      assert book.date_finished == ~D[2011-05-18]
      assert book.date_started == ~D[2011-05-18]
      assert book.genres == ["fiction", "crime"]
      assert book.rating == 4.0
      assert book.title == "Crime"
    end

    test "update_book/2 with invalid data returns error changeset" do
      book = book_fixture()
      assert {:error, %Ecto.Changeset{}} = Books.update_book(book, @invalid_attrs)
      assert book == Books.get_book!(book.id)
    end

    test "delete_book/1 deletes the book" do
      book = book_fixture()
      assert {:ok, %Book{}} = Books.delete_book(book)
      assert_raise Ecto.NoResultsError, fn -> Books.get_book!(book.id) end
    end

    test "change_book/1 returns a book changeset" do
      book = book_fixture()
      assert %Ecto.Changeset{} = Books.change_book(book)
    end

    test "search_books/1 by title returns something" do
      search_term = "king"
      assert length(Books.search_books(search_term)) == 1
    end

    test "search_books/1 by author returns something" do
      search_term = "tolkien"
      assert length(Books.search_books(search_term)) == 1
    end
  end
end
