# import-league

Awesome Project Build with Node + GraphQL + TypeORM. The goal is to create a project that exposes an API built with GraphQL, with a mutation and some queries. We'll be hitting http://www.football-data.org/ API (you can see the documentation on the site, use the API v4) to populate the data locally and then expose it.

> **_NOTE:_** The .env file was uploaded for educational purposes

## Technologies

- Typescript
- Express
- TypeORM
- Graphql

## Prerequisites

- [NodeJS][nodejs]
- [Docker][docker]
- [Docker-compose][docker-compose]

## Steps to run this project

1. Run `npm i` command to install all the dependencies.
2. Let's run this docker-compose command to initialize the app:

```sh
docker compose up
```

3. Go to [http://localhost:5001/graphql][app]

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
- Create test suites

[nodejs]: https://nodejs.org/en/download/
[docker]: https://www.docker.com/get-started
[docker-compose]: https://docs.docker.com/compose/install/
[app]: http://localhost:5001/graphql
[dataMapper]: https://github.com/typeorm/typeorm/blob/HEAD/docs/active-record-data-mapper.md#what-is-the-data-mapper-pattern
[activeRecord]: https://github.com/typeorm/typeorm/blob/HEAD/docs/active-record-data-mapper.md#what-is-the-active-record-pattern
