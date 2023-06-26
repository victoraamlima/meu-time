import styled from "styled-components"

const StyledPlayers = styled.section`
  grid-area: players;
  display: flex;
`
const PlayersList = styled.div`
  grid-area: team-info;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: space-evenly
`

const PlayersCard = styled.li`
  display: flex;
  align-items: center;
  // justify-content: center;
  border: 1px solid #000;
  border-radius: 5%;
  // min-width: 100px;
  height: 150px;
  padding: 10px;
  gap: 5px;
  background: #fff;
`
const Age = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
`

const PlayerInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  width: 100px;
`
const PlayerName = styled.h3`
  width: 100%;
  text-align: center;
  overflow-wrap: break-word;
`

const PlayerImg = styled.img`
  height: 100%;
  gap: 5px;
`
export {
  StyledPlayers,
  PlayersList,
  PlayersCard,
  Age,
  PlayerName,
  PlayerInfo,
  PlayerImg,
}
