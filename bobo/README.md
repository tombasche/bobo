## Bobo backend

### Running locally

1. Run the migrations:

```sh
mix ecto.migrate
```

2. (Optional) Populate with test data:

```sh
mix ecto.setup
```

3. Run Phoenix

```sh
iex -S mix phx.server
```
