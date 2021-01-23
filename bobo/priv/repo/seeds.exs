# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Bobo.Repo.insert!(%Bobo.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Bobo.Books.Book
alias Bobo.Repo

%Book{title: "Relish", author: "Lucy Knisley"} |> Repo.insert!
%Book{title: "The Return of the King", author: "J.R.R. Tolkien"} |> Repo.insert!
