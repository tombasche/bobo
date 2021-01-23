defmodule Bobo.Repo.Migrations.CreateBooks do
  use Ecto.Migration

  def change do
    create table(:books) do
      add :title, :string
      add :author, :string
      add :rating, :float
      add :genres, {:array, :string}
      add :date_finished, :date
      add :date_started, :date
      add :comments, :text

      timestamps()
    end
  end
end
