import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/data"
import { ArcElement, Chart, Legend, Tooltip } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { useNavigate } from "react-router-dom"
import {
  GraphicTitle,
  StyledFormation,
  StyledTeamInfo,
  StyledTeamInfoContainer,
  Table,
} from "./StyledTeamInfo"

Chart.register(ArcElement, Tooltip, Legend)

const TeamInfo = () => {
  const { selectedTeamInfo } = useContext(DataContext)

  const [validTeamInfo, setValidValidTeamInfo] = useState(false)
  const [graphicData, setGraphicData] = useState({ label: [], data: [] })

  let navigate = useNavigate()

  const data = {
    labels: graphicData.label,
    datasets: [
      {
        label: "Gols no período",
        data: graphicData.data,
        backgroundColor: [
          "#FF0000",
          "#0000FF",
          "#008000",
          "#FFFF00",
          "#800080",
          "#FFA500",
          "#FFC0CB",
          "#A52A2A",
        ],
        hoverOffset: 4,
      },
    ],
  }

  const options = {}

  useEffect(() => {
    if (selectedTeamInfo !== undefined && selectedTeamInfo !== false) {
      function getGraphicData() {
        const goalsData = selectedTeamInfo.goals.for.minute
        const periods = Object.keys(goalsData)

        let labels = []
        let goals = []

        periods.map((periodMinute) => {
          labels.push(periodMinute + " min")

          goals.push(
            goalsData[periodMinute].total === null
              ? 0
              : goalsData[periodMinute].total
          )
        })

        setGraphicData({ label: labels, data: goals })
      }
      getGraphicData()
    }
  }, [selectedTeamInfo])

  useEffect(() => {
    if (data.datasets[0].data.length > 0) {
      setValidValidTeamInfo(true)
    }

    if (selectedTeamInfo === false) {
      navigate("/")
    }
  }, [selectedTeamInfo, graphicData])

  return (
    <>
      {validTeamInfo && (
        <>
          <StyledTeamInfoContainer>
            <StyledTeamInfo>
              {selectedTeamInfo.team !== undefined ? (
                <img src={selectedTeamInfo.team.logo} alt="Brasão do time" />
              ) : (
                <span>Não há Brasão disponível</span>
              )}
              <h1>{selectedTeamInfo.team.name}</h1>
            </StyledTeamInfo>

            <StyledTeamInfo>
              <StyledFormation>
                <h2>Formação mais usada:</h2>
                <h3>
                  {selectedTeamInfo.lineups[0] !== undefined
                    ? selectedTeamInfo.lineups[0].formation
                    : "Não há formação disponível"}
                </h3>
              </StyledFormation>
              <Table>
                <thead>
                  <tr>
                    <th>
                      <p>Total de Jogos</p>
                    </th>
                    <th>
                      <p>Total de Vitórias</p>
                    </th>
                    <th>
                      <p>Total de Derrotas</p>
                    </th>
                    <th>
                      <p>Total de Empates</p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <p>{selectedTeamInfo.fixtures.played.total}</p>
                    </td>
                    <td>
                      <p>{selectedTeamInfo.fixtures.wins.total}</p>
                    </td>
                    <td>
                      <p>{selectedTeamInfo.fixtures.loses.total}</p>
                    </td>
                    <td>
                      <p>{selectedTeamInfo.fixtures.draws.total}</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </StyledTeamInfo>

            <div>
              <GraphicTitle>Gols marcados por tempo de jogo</GraphicTitle>
              <Doughnut data={data} options={options}></Doughnut>
            </div>
          </StyledTeamInfoContainer>
        </>
      )}
    </>
  )
}

export { TeamInfo }
