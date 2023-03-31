import { getLeagueInfo, getPlayersInfo, getTeamInfo, importLeagueInfo } from "../services/league";

export const resolvers = {
  hello: ({ name }: { name: string }) => `Hello ${name}`,
  getInfo: ({ leagueCode }: { leagueCode: string }) => getLeagueInfo(leagueCode),
  players: ({ leagueCode, teamName }: { leagueCode: string, teamName?: string }) => getPlayersInfo(leagueCode, teamName),
  teams: ({ teamName }: { teamName: string }) => getTeamInfo(teamName),
  import: ({ leagueCode }: { leagueCode: string }) => importLeagueInfo(leagueCode),
};
