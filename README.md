# Awesome Project Build with Node + GraphQL + TypeORM

## Steps to run this project

1. Run `npm i` command to install all the dependencies.
2. Let's run this docker-compose command to initialize the app:

```sh
docker compose up
```

3. Go to [http://localhost:5001/graphql](http://localhost:5001/graphql)

And now you can interact with the application, thees are the query and mutation you can try:

```
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
