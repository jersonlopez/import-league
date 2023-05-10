# Awesome Project Build with Node + GraphQL + TypeORM

## Steps to run this project

1. Run `npm i` command to install all the dependencies.
2. Let's run this docker-compose command to initialize the app:

```sh
docker compose up
```

3. Go to [http://localhost:5001/graphql][def]

And now you can interact with the application, thees are the query and mutation you can try:

```code
mutation Import {
  import(leagueCode: "CL")
}

# teamName property is optional
query Players {
  players(leagueCode: "CL", teamName: "FC Porto"){
    name
    role
    team
  }
}

query Teams {
  teams(teamName: "FC Porto") {
    id
    name
    coach{
      name
    }
    players {
      name
    }
  }
}
```

## TO DO

- Change [DataMapper][dataMapper] to [ActiveRecord][activeRecord]

[def]: http://localhost:5001/graphql
[dataMapper]: https://github.com/typeorm/typeorm/blob/HEAD/docs/active-record-data-mapper.md#what-is-the-data-mapper-pattern
[activeRecord]: https://github.com/typeorm/typeorm/blob/HEAD/docs/active-record-data-mapper.md#what-is-the-active-record-pattern
