import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/data"
import {
  FilterSectionContainer,
  FilterSectionIcon,
  StyledLabel,
  StyledSelect,
} from "../StyledFilter"

const CountriesFilter = () => {
  const { countries, selectedCountry, setSelectedCountry } =
    useContext(DataContext)

  const [validCountry, setValidCountry] = useState(false)

  const handleCountryChange = (e) => {
    const localCountry = JSON.parse(e.target.value)
    setSelectedCountry(localCountry)
  }

  useEffect(() => {
    if (selectedCountry !== undefined) {
      setValidCountry(true)
    }
  }, [countries])

  return (
    <FilterSectionContainer>
      <StyledLabel htmlFor="countries">Escolha o pais</StyledLabel>

      <StyledSelect
        name="countries"
        id="countries"
        onChange={handleCountryChange}
        value={JSON.stringify(selectedCountry)}
      >
        {countries.map((country) => {
          return (
            <option value={JSON.stringify(country)} key={country.name}>
              {country.name}
            </option>
          )
        })}
      </StyledSelect>

      {validCountry && <FilterSectionIcon src={selectedCountry.flag} />}
    </FilterSectionContainer>
  )
}

export { CountriesFilter }
