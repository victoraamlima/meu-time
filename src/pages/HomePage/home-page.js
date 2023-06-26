import { useState } from "react"
import { Filter } from "../../components/Filter/Filter"
import { Team } from "../../components/Team/Team"
import { Template } from "./styled-home-page"

const HomePage = () => {
  const [visibleTeam, setVisibleTeam] = useState(false)

  return (
    <Template>
      <Filter setVisibleTeam={setVisibleTeam} visibleTeam={visibleTeam} />
      {visibleTeam && <Team />}
    </Template>
  )
}

export { HomePage }
