import { PlayersInfo } from "./PlayersInfo/PlayersInfo"
import { TeamInfo } from "./TeamInfo/TeamInfo"
import { StyledTeamContainer } from "./StyledTeam"

const Team = () => {
  return (
    <StyledTeamContainer>
      <TeamInfo />
      <PlayersInfo />
    </StyledTeamContainer>
  )
}

export { Team }
