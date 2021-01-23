defmodule BoboWeb.PageController do
  use BoboWeb, :controller

  def index(conn, _params) do
    text(conn, "The time is #{DateTime.utc_now()}")
  end
end
