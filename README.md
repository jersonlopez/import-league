# Awesome Project Build with Node + GraphQL + TypeORM

## Steps to run this project

1. Let's run this docker command to create database:

```sh
docker run -d --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_DB=db_league postgres
```

2. Run `npm i` command.
3. Run `npm run db:migrate` command
4. Run `npm run dev` command
