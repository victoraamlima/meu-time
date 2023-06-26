import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/data"
import { getTeams } from "../../../services/services"
import { FilterSectionContainer, FilterSectionIcon, StyledLabel, StyledSelect } from "../StyledFilter"
import { useNavigate } from "react-router-dom"
import { validFetch } from "../../../validation/validation"

const TeamsFilter = () => {
  const {
    key,
    selectedSeason,
    selectedLeague,
    teams,
    setTeams,
    selectedTeam,
    setSelectedTeam,
  } = useContext(DataContext)

  let navigate = useNavigate()

  const [validLogo, setValidLogo] = useState(false)

  const handleTeamsChange = (e) => {
    const localTeam = JSON.parse(e.target.value)
    setSelectedTeam(localTeam)
  }

  useEffect(() => {
    const fetchTeamsData = async (
      LocalKey,
      LocalSelectedLeague,
      LocalSelectedSeason
    ) => {
      const teamsData = await getTeams(
        LocalKey,
        LocalSelectedLeague,
        LocalSelectedSeason
      )

      return teamsData
    }

    if (
      key !== undefined &&
      selectedLeague !== undefined &&
      selectedSeason !== undefined
    ) {
      fetchTeamsData(key, selectedLeague.id, selectedSeason)
        .then((data) => {
          if (validFetch(data.errors)) {
            data.response.sort((a, b) => a.team.name.localeCompare(b.team.name))

            setTeams(data.response)
            setSelectedTeam(data.response[0].team)
          } else {
            navigate("/")
          }
        })
        .catch((err) => {
          alert(err)
          navigate("/")
        })
    }
  }, [key, selectedLeague, selectedSeason])

  useEffect(() => {
    if (selectedTeam !== undefined) {
      setValidLogo(true)
    }
  }, [teams])

  return (
    <>
      {validLogo && (
        <FilterSectionContainer>
          <StyledLabel htmlFor="times">Escolha o pais</StyledLabel>

          <StyledSelect name="times" id="times" onChange={handleTeamsChange}>
            {teams.map((team) => {
              return (
                <option value={JSON.stringify(team.team)} key={team.team.name}>
                  {team.team.name}
                </option>
              )
            })}
          </StyledSelect>
          <FilterSectionIcon src={selectedTeam.logo} />
        </FilterSectionContainer>
      )}
    </>
  )
}

export { TeamsFilter }
