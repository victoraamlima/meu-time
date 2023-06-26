import styled from "styled-components"

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 10px;
  background: #7dd932;
  transition: all 1s ease-in;
  width: ${({ visibleTeam }) => (visibleTeam ? "225px" : "100%")};
`
const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`
const FilterSection = styled.div`
  display: flex;
`

const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 600;
`

const StyledSelect = styled.select`
  font-size: 15px;
`

const FilterSectionIcon = styled.img`
  height: 100px;
`

export {
  Aside,
  FilterSectionContainer,
  FilterSection,
  StyledLabel,
  StyledSelect,
  FilterSectionIcon,
}
