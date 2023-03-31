import { Coach, Competition, Player, Team } from "../db/entities";
import { apiClient } from "../helpers/apiClient";
import { getAllPlayersCoach } from "../serializers";
import { TeamsResponse, TeamResponse, PlayerResponse, CompetitionsResponse } from '../types';


const getPlayers = (players: PlayerResponse[]) => players.map(async (player) => {
  const newPlayer = new Player();
  newPlayer.name = player.name;
  newPlayer.position = player.position || '';
  newPlayer.dateOfBirth = player.dateOfBirth;
  newPlayer.nationality = player.nationality || '';

  return await newPlayer.save();
})

const getTeams = (teams: TeamResponse[]) => teams.map(async (team) => {
  const newTeam = new Team();

  if (team.coach.id) {
    const coach = new Coach();
    coach.name = team.coach.name || '';
    coach.dateOfBirth = team.coach.dateOfBirth || new Date();
    coach.nationality = team.coach.nationality || '';
    await coach.save();

    newTeam.coach = coach;
  }

  const players = await Promise.all(getPlayers(team.squad));

  newTeam.name = team.name;
  newTeam.shortName = team.shortName || '';
  newTeam.tla = team.tla || '';
  newTeam.areaName = team.area.name;
  newTeam.address = team.address;
  newTeam.players = players;

  return await newTeam.save();
})

export const importLeagueInfo = async (leagueCode: string) => {
  try {
    const rows = await Competition.findBy({ code: leagueCode });

    if (rows.length) {
      throw new Error(`League ${leagueCode} have been already imported`);
    }

    const competitionsRequest = apiClient<CompetitionsResponse>({ endpoint: `competitions/${leagueCode}` })
    const teamsRequest = apiClient<TeamsResponse>({ endpoint: `competitions/${leagueCode}/teams` })

    const [competitions, teams] = await Promise.all([competitionsRequest, teamsRequest]);

    const competitionInfo = competitions.data;
    const teamsInfo = teams.data;

    const competition = new Competition();
    competition.name = competitionInfo.name;
    competition.code = competitionInfo.code;
    competition.areaName = competitionInfo.area.name;
    competition.teams = await Promise.all(getTeams(teamsInfo.teams));

    await competition.save();

    return 'Data imported successfully';
  } catch (error) {
    console.log(error)
    throw error;
  }
};

export const getLeagueInfo = async (leagueCode: string) => {
  try {
    console.log({ leagueCode })

    const rows = await Competition.findBy({ code: leagueCode });
    console.log(rows)
    if (!rows.length) {
      throw new Error(`League ${leagueCode} doesn't exist`);
    }

    const info = await Competition.getRepository()
      .createQueryBuilder('competitions')
      .where({ code: leagueCode })
      .leftJoinAndSelect('competitions.teams', 'teams')
      .leftJoinAndSelect('teams.coach', 'coaches')
      .leftJoinAndSelect('teams.players', 'players')
      .getMany();

    return info;
  } catch (error) {
    console.log('Error: ', error)
    throw error;
  }
}

export const getPlayersInfo = async (leagueCode: string, teamName?: string) => {
  try {
    console.log({ leagueCode })

    const exist = await Competition.findOne({ where: { code: leagueCode } });
    console.log(exist)
    if (!exist) {
      throw new Error(`League ${leagueCode} doesn't exist`);
    }

    const queryBuilder = Competition.getRepository()
      .createQueryBuilder('competitions')
      .where({ code: leagueCode })
      .leftJoinAndSelect('competitions.teams', 'teams');

    if (teamName) {
      queryBuilder.where('teams.name = :teamName', { teamName });
    }

    const info = await queryBuilder
      .leftJoinAndSelect('teams.coach', 'coaches')
      .leftJoinAndSelect('teams.players', 'players')
      .getOne();

    const teams = info?.teams || []

    if (!teams.length) {
      throw new Error(`No teams found for ${leagueCode} competition`);
    }

    console.log({ info });

    return getAllPlayersCoach(teams);
  } catch (error) {
    console.log('Error: ', error)
    throw error;
  }
}

export const getTeamInfo = async (teamName: string) => {
  try {
    console.log({ teamName })

    const teams = await Team.find({
      where: { name: teamName }, relations: {
        players: true,
        coach: true
      }
    })

    if (!teams.length) {
      throw new Error(`Team ${teamName} doesn't exist`);
    }

    console.log({ teams });

    return teams;
  } catch (error) {
    console.log('Error: ', error)
    throw error;
  }
}
