import styled from "styled-components"

const StyledTeamInfoContainer = styled.header`
  grid-area: team-info;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: #c5d932;
  padding: 15px;
  gap: 10px;
`

const StyledFormation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const StyledTeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 260px;

  th,
  td {
    border: 1px solid #000;
    padding: 8px;
  }

  tr {
    text-align: center;
    text-align: center;
    background-color: #fff;
  }
`
const GraphicTitle = styled.h2`
 text-align: center;
`

export { StyledTeamInfoContainer,StyledFormation, StyledTeamInfo, Table, GraphicTitle }
