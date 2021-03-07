defmodule Bobo.Repo.Migrations.RemoveDateStarted do
  use Ecto.Migration

  def up do
    alter table(:books) do
      remove :date_started
    end
  end

  def down do
    alter table(:books) do
      add :date_started, :date
    end
  end
end
