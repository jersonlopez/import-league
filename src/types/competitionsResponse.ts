export interface CompetitionsResponse {
  area:          Area;
  id:            number;
  name:          string;
  code:          string;
  type:          string;
  emblem:        string;
  currentSeason: Season;
  seasons:       Season[];
  lastUpdated:   Date;
}

interface Area {
  id:   number;
  name: string;
  code: string;
  flag: string;
}

interface Season {
  id:              number;
  startDate:       Date;
  endDate:         Date;
  currentMatchday: number | null;
  winner:          Winner | null;
}

interface Winner {
  id:          number;
  name:        string;
  shortName:   string;
  tla:         string;
  crest:       string;
  address:     string;
  website:     string;
  founded:     number;
  clubColors:  string;
  venue:       string;
  lastUpdated: Date;
}
