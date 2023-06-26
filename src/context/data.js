import { createContext, useState } from "react"

const DataContext = createContext([])

const DataProvider = (props) => {
  let lastSeason

  function SetLastSeason() {
    const currentDate = new Date()
    lastSeason = currentDate.getFullYear() - 1
  }
  SetLastSeason()

  const [key, setKey] = useState()
  const [seasons, setSeasons] = useState([lastSeason])
  const [countries, setCountries] = useState([])
  const [leagues, setLeagues] = useState([])
  const [teams, setTeams] = useState([])

  const [players, setPlayers] = useState([])

  const [selectedTeam, setSelectedTeam] = useState()
  const [selectedCountry, setSelectedCountry] = useState()
  const [selectedLeague, setSelectedLeague] = useState()
  const [selectedSeason, setSelectedSeason] = useState(lastSeason)
  const [selectedTeamInfo, setSelectedTeamInfo] = useState()

  return (
    <DataContext.Provider
      value={{
        key,
        setKey,
        seasons,
        setSeasons,
        countries,
        setCountries,
        leagues,
        setLeagues,
        teams,
        setTeams,
        selectedTeam,
        setSelectedTeam,
        players,
        setPlayers,
        selectedCountry,
        setSelectedCountry,
        selectedLeague,
        setSelectedLeague,
        selectedSeason,
        setSelectedSeason,
        selectedTeamInfo,
        setSelectedTeamInfo,
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext }
