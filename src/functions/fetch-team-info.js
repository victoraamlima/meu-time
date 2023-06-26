import { getTeamInfo } from "../services/services"
import { validFetch } from "../validation/validation"

export const fetchTeamInfo = async (
  key,
  selectedTeamId,
  selectedSeason,
  selectedLeagueId,
  setSelectedTeamInfo
) => {
  getTeamInfo(key, selectedLeagueId, selectedSeason, selectedTeamId)
    .then((data) => {
      if (validFetch(data.errors)) {
        setSelectedTeamInfo(data.response)
      } else {
        setSelectedTeamInfo(false)
      }
    })
    .catch((err) => {
      alert(err)
      setSelectedTeamInfo(false)
    })
}
