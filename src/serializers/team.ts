import { Team } from "../db/entities";

interface PlayersAndCoaches {
  id:          number;
  name:        string;
  position?:   string | null;
  dateOfBirth: Date;
  nationality: string | null;
  team:        string;
  role:        string;
}
export const getAllPlayersCoach = (teams: Team[]) => {
  const coachAndPlayer: PlayersAndCoaches[] = [];

  teams.forEach((team) => {
    let playerOrCoach: PlayersAndCoaches;
    if (!team.players.length) {
      playerOrCoach = { ...team.coach, role: 'Coach', team: team.name}
      coachAndPlayer.push(playerOrCoach);
    } else {
      team.players.forEach((player) => {
        playerOrCoach = { ...player, role: 'Player', team: team.name}
        coachAndPlayer.push(playerOrCoach);
      })
    }
  })

  return coachAndPlayer;
}
