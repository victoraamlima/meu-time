import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/data"
import { useNavigate } from "react-router-dom"
import {
  Age,
  PlayerImg,
  PlayerInfo,
  PlayerName,
  PlayersCard,
  PlayersList,
  StyledPlayers,
} from "./StyledPlayersInfo"

const PlayersInfo = () => {
  const { players } = useContext(DataContext)

  let navigate = useNavigate()

  const [validPlayersInfo, setValidValidPlayersInfo] = useState(false)

  useEffect(() => {
    if (players !== undefined) {
      setValidValidPlayersInfo(true)
    }

    if (players === false) {
      navigate("/")
    }
  }, [players])

  return (
    <>
      {validPlayersInfo && (
        <StyledPlayers>
          <PlayersList>
            {players.map((player) => {
              return (
                <PlayersCard key={player.player.name}>
                  <PlayerInfo>
                    <PlayerName>{player.player.name}</PlayerName>
                    <Age>
                      <h4>{player.player.age}</h4>
                      <span>anos</span>
                    </Age>
                    <h4>Pais de origem:</h4>
                    <span>{player.player.nationality}</span>
                  </PlayerInfo>
                  <PlayerImg src={player.player.photo} />
                </PlayersCard>
              )
            })}
          </PlayersList>
        </StyledPlayers>
      )}
    </>
  )
}

export { PlayersInfo }
