export interface TeamsResponse {
  count:       number;
  filters:     Filters;
  competition: Competition;
  season:      Season;
  teams:       TeamResponse[];
}

interface Competition {
  id:     number;
  name:   string;
  code:   string;
  type:   Type;
  emblem: null | string;
}

enum Type {
  Cup = "CUP",
  League = "LEAGUE",
}

interface Filters {
  season: string;
}

interface Season {
  id:              number;
  startDate:       Date;
  endDate:         Date;
  currentMatchday: number;
  winner:          null;
}

export interface TeamResponse {
  area:                Area;
  id:                  number;
  name:                string;
  shortName:           null | string;
  tla:                 null | string;
  crest:               string;
  address:             string;
  website:             null | string;
  founded:             number | null;
  clubColors:          null | string;
  venue:               null | string;
  runningCompetitions: Competition[];
  coach:               Coach;
  squad:               PlayerResponse[];
  staff:               Coach[];
  lastUpdated:         Date;
}

interface Area {
  id:   number;
  name: string;
  code: string;
  flag: null | string;
}

interface Coach {
  id:          number | null;
  firstName:   null | string;
  lastName:    null | string;
  name:        null | string;
  dateOfBirth: Date | null;
  nationality: null | string;
  contract:    Contract;
}

interface Contract {
  start: null | string;
  until: null | string;
}

export interface PlayerResponse {
  id:          number;
  name:        string;
  position:    Position | null;
  dateOfBirth: Date;
  nationality: null | string;
}

enum Position {
  Defence = "Defence",
  Empty = "",
  Forward = "Forward",
  Goalkeeper = "Goalkeeper",
  Keeper = "Keeper",
  Midfield = "Midfield",
  Midfielder = "Midfielder",
  Offence = "Offence",
}
