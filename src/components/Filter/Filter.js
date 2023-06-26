import { SeasonsFilter } from "./SeasonsFilter/SeasonsFilter"
import { CountriesFilter } from "./CountriesFilter/CountriesFilter"
import { LeaguesFilter } from "./LeaguesFilter/LeaguesFilter"
import { TeamsFilter } from "./TeamsFilter/TeamsFilter"
import { FilterSetBtn } from "./FilterSetBtn/FilterSetBtn"
import { Aside } from "./StyledFilter"

const Filter = ({ visibleTeam, setVisibleTeam }) => {
  return (
    <Aside visibleTeam={visibleTeam}>
      <SeasonsFilter />

      <CountriesFilter />

      <LeaguesFilter />

      <TeamsFilter />

      <FilterSetBtn setVisibleTeam={setVisibleTeam} />
    </Aside>
  )
}

export { Filter }
