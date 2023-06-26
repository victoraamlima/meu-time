import { getPlayers } from "../services/services"
import { validFetch } from "../validation/validation"

export const fetchPlayersInfo = (
  key,
  selectedTeamId,
  selectedSeason,
  setPlayers
) => {
  getPlayers(key, selectedTeamId, selectedSeason)
    .then((data) => {
      if (validFetch(data.errors)) {
        setPlayers(data.response)
      } else {
        setPlayers(false)
      }
    })
    .catch((err) => {
      alert(err)
      setPlayers(false)
    })
}
