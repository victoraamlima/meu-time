import { fetchTeamInfo } from "../../../functions/fetch-team-info"
import { useContext } from "react"
import { StyledFilterSetBtn } from "./StyledFilterSetBtn"
import { DataContext } from "../../../context/data"
import { fetchPlayersInfo } from "../../../functions/fetch-players-info"

const FilterSetBtn = ({ setVisibleTeam }) => {
  const {
    key,
    selectedTeam,
    selectedSeason,
    selectedLeague,
    setSelectedTeamInfo,
    setPlayers,
  } = useContext(DataContext)

  function applyFilter(e) {
    if (
      key !== undefined &&
      selectedTeam !== undefined &&
      selectedSeason !== undefined &&
      selectedLeague !== undefined &&
      setSelectedTeamInfo !== undefined &&
      setPlayers !== undefined
    ) {
      e.preventDefault()

      setVisibleTeam(true)

      fetchTeamInfo(
        key,
        selectedTeam.id,
        selectedSeason,
        selectedLeague.id,
        setSelectedTeamInfo
      )

      fetchPlayersInfo(key, selectedTeam.id, selectedSeason, setPlayers)
    }
  }

  return (
    <>
      <StyledFilterSetBtn onClick={(e) => applyFilter(e)}>
        APPLY FILTER
      </StyledFilterSetBtn>
    </>
  )
}

export { FilterSetBtn }
