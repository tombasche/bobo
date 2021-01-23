defmodule BoboWeb.Router do
  use BoboWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/graphql", Absinthe.Plug.GraphiQL,
      schema: BoboWeb.Schema,
      interface: :simple,
      context: %{pubsub: BoboWeb.Endpoint}
  end
end
