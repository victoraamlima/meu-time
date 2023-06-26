async function getSeasons(key) {
  // fazer test?

  const response = await fetch(
    "https://v3.football.api-sports.io/leagues/seasons",
    {
      method: "GET",
      headers: {
        "x-apisports-key": key,
      },
    }
  )

  const seasonsData = await response.json()
  return seasonsData
}

async function getCountries(key) {
  // fazer test?

  const response = await fetch("https://v3.football.api-sports.io/countries", {
    method: "GET",
    headers: {
      "x-apisports-key": key,
    },
  })

  const countriesData = await response.json()
  return countriesData
}

async function getLeagues(key, country, season) {
  // fazer test?

  const response = await fetch(
    `https://v3.football.api-sports.io/leagues?country=${country}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": key,
      },
    }
  )

  const leaguesData = await response.json()
  return leaguesData
}

async function getTeams(key, leagueId, season, team) {
  // fazer test?

  const response = await fetch(
    `https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": key,
      },
    }
  )

  const teamsData = await response.json()
  return teamsData
}
async function getTeamInfo(key, leagueId, season, team) {
  // fazer test?

  const response = await fetch(
    `https://v3.football.api-sports.io/teams/statistics?league=${leagueId}&season=${season}&team=${team}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": key,
      },
    }
  )

  const teamInfoData = await response.json()
  return teamInfoData
}
async function getPlayers(key, teamId, season) {
  // fazer test?

  const response = await fetch(
    `https://v3.football.api-sports.io/players?season=${season}&team=${teamId}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": key,
      },
    }
  )

  const playersData = await response.json()
  return playersData
}

export {
  getSeasons,
  getCountries,
  getLeagues,
  getTeams,
  getTeamInfo,
  getPlayers,
}
