import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/data"
import { getLeagues } from "../../../services/services"
import {
  FilterSectionContainer,
  FilterSectionIcon,
  StyledLabel,
  StyledSelect,
} from "../StyledFilter"
import { useNavigate } from "react-router-dom"
import { validFetch } from "../../../validation/validation"

const LeaguesFilter = () => {
  const {
    key,
    leagues,
    setLeagues,
    selectedSeason,
    selectedCountry,
    selectedLeague,
    setSelectedLeague,
  } = useContext(DataContext)

  let navigate = useNavigate()

  const [validLogo, setValidLogo] = useState(false)

  const handleLeaguesChange = (e) => {
    const localLeague = JSON.parse(e.target.value)
    setSelectedLeague(localLeague)
  }

  useEffect(() => {
    const fetchLeaguesData = async (
      LocalKey,
      LocalSelectedCountry,
      LocalSelectedSeason
    ) => {
      const leaguesData = await getLeagues(
        LocalKey,
        LocalSelectedCountry,
        LocalSelectedSeason
      )
      return leaguesData
    }

    if (
      key !== undefined &&
      selectedCountry !== undefined &&
      selectedSeason !== undefined
    ) {
      fetchLeaguesData(key, selectedCountry.name, selectedSeason)
        .then((data) => {
          if (validFetch(data.errors)) {
            data.response.sort((a, b) =>
              a.league.name.localeCompare(b.league.name)
            )

            setLeagues(data.response)
            setSelectedLeague(data.response[0].league)
          } else {
            navigate("/")
          }
        })
        .catch((err) => {
          alert(err.message)
          navigate("/")
        })
    }
  }, [key, selectedCountry, selectedSeason])

  useEffect(() => {
    if (selectedLeague !== undefined) {
      setValidLogo(true)
    }
  }, [leagues])

  return (
    <>
      {validLogo && (
        <FilterSectionContainer>
          <StyledLabel htmlFor="leagues">Escolha a liga</StyledLabel>

          <StyledSelect
            name="leagues"
            id="leagues"
            onChange={handleLeaguesChange}
            value={JSON.stringify(selectedLeague)}
          >
            {leagues.map((league) => {
              return (
                <option
                  key={league.league.name}
                  value={JSON.stringify(league.league)}
                >
                  {league.league.name}
                </option>
              )
            })}
          </StyledSelect>

          <FilterSectionIcon src={selectedLeague.logo} />
        </FilterSectionContainer>
      )}
    </>
  )
}

export { LeaguesFilter }
