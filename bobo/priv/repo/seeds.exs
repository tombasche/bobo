alias Bobo.Books.Book
alias Bobo.Repo

%Book{
  title: "Relish",
  author: "Lucy Knisley",
  rating: 4.0,
  genres: ["non-fiction", "graphic novel", "food"],
  date_finished: ~D[2019-04-20],
  comments: "Great read!"
}
|> Repo.insert!()

%Book{
  title: "The Return of the King",
  author: "J.R.R. Tolkien",
  rating: 5.0,
  genres: [
    "fiction",
    "fantasy"
  ],
  date_finished: ~D[2020-01-03],
  date_started: ~D[2019-12-27],
  comments: "Lots of talk of food"
}
|> Repo.insert!()
