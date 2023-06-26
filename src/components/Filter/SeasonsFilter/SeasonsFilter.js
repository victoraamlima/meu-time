import { useContext, useEffect } from "react"
import { DataContext } from "../../../context/data"
import {
  FilterSectionContainer,
  StyledLabel,
  StyledSelect,
} from "../StyledFilter"
import { getSeasons } from "../../../services/services"
import { validFetch } from "../../../validation/validation"
import { useNavigate } from "react-router-dom"

const SeasonsFilter = () => {
  const { key, seasons, setSeasons, setSelectedSeason } =
    useContext(DataContext)

  let navigate = useNavigate()

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value)
  }

  useEffect(() => {
    const fetchSeasonsData = async (LocalKey) => {
      const seasonsData = await getSeasons(LocalKey)
      return seasonsData
    }
    if (key !== undefined) {
      fetchSeasonsData(key)
        .then((data) => {
          if (validFetch(data.errors)) {
            setSeasons(data.response.reverse())
          } else {
            navigate("/")
          }
        })
        .catch((err) => {
          alert(err.message)
          navigate("/")
        })
    }
  }, [key])

  return (
    <FilterSectionContainer>
      <StyledLabel htmlFor="seasons">Escolha a Temporada</StyledLabel>

      <StyledSelect name="seasons" id="seasons" onChange={handleSeasonChange}>
        {seasons.map((season) => {
          return (
            <option value={season} key={season}>
              {season}
            </option>
          )
        })}
      </StyledSelect>
    </FilterSectionContainer>
  )
}

export { SeasonsFilter }
