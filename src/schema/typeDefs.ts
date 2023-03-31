import { buildSchema } from "graphql";

export const schema = buildSchema(`
scalar Date

type Query {
  hello(name: String): String,
  getInfo(leagueCode: String!): [Competition]
  players(leagueCode: String!, teamName: String): [PlayersAndCoaches]
  teams(teamName: String!): [Team]!
}

type Mutation {
  import(leagueCode: String!): String
}

type Competition {
    id: Int,
    name: String,
    code: String,
    areaName: String,
    teams: [Team]
}

type Team {
  id: Int,
  name: String,
  tla: String,
  shortName: String,
  areaName: String,
  address: String,
  coach: Coach
  players: [Player]
}

type Player {
  id: Int,
  name: String,
  position: String,
  dateOfBirth: Date,
  nationality: String
  team: Team
}

type Coach {
  id: Int,
  name: String,
  dateOfBirth: Date,
  nationality: String
  team: Team
}

type PlayersAndCoaches {
  id: Int,
  name: String,
  position: String,
  dateOfBirth: Date,
  nationality: String
  team: String
  role: String
}
`);
