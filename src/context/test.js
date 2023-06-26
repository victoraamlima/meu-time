const [seasons, setSeasons] = useState([
  2008, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
])
const [countries, setCountries] = useState([
  {
    name: "Albania",
    code: "AL",
    flag: "https://media-3.api-sports.io/flags/al.svg",
  },
  {
    name: "Algeria",
    code: "DZ",
    flag: "https://media-3.api-sports.io/flags/dz.svg",
  },
  {
    name: "Andorra",
    code: "AD",
    flag: "https://media-3.api-sports.io/flags/ad.svg",
  },
  {
    name: "Angola",
    code: "AO",
    flag: "https://media-1.api-sports.io/flags/ao.svg",
  },
  {
    name: "Argentina",
    code: "AR",
    flag: "https://media-1.api-sports.io/flags/ar.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    flag: "https://media-2.api-sports.io/flags/am.svg",
  },
  {
    name: "Aruba",
    code: "AW",
    flag: "https://media-3.api-sports.io/flags/aw.svg",
  },
])
const [leagues, setLeagues] = useState([
  {
    league: {
      id: 513,
      name: "2nd Division",
      logo: "https://media.api-sports.io/football/leagues/2.png",
    },
  },
  {
    league: {
      id: 514,
      name: "1nd Division - Group B",
    },
  },
  {
    league: {
      id: 515,
      name: "3nd Division - Group B",
    },
  },
])
const [teams, setTeams] = useState([
  {
    team: {
      id: 33,
      name: "Manchester United",
    },
  },
  {
    team: {
      id: 34,
      name: "Flamengo",
    },
  },
  {
    team: {
      id: 35,
      name: "Coríntias",
    },
  },
])

const [players, setPlayers] = useState([
  {
    player: {
      id: 882,
      name: "David de Gea",
      firstname: "David",
      lastname: "de Gea Quintana",
      age: 33,
      birth: {
        date: "1990-11-07",
        place: "Madrid",
        country: "Spain",
      },
      nationality: "Spain",
      height: "192 cm",
      weight: "76 kg",
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/882.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 35,
          lineups: 35,
          minutes: 3150,
          number: null,
          position: "Goalkeeper",
          rating: "6.885714",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 41,
          assists: null,
          saves: 91,
        },
        passes: {
          total: 1009,
          key: 1,
          accuracy: 19,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: 11,
          won: 9,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: 4,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 12,
          lineups: 12,
          minutes: 1080,
          number: null,
          position: "Goalkeeper",
          rating: "6.825000",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 12,
          assists: null,
          saves: 28,
        },
        passes: {
          total: 314,
          key: null,
          accuracy: 19,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: 1,
        },
        duels: {
          total: 1,
          won: 1,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
    ],
  },
  {
    player: {
      id: 883,
      name: "Lee Grant",
      firstname: "Lee",
      lastname: "Grant",
      age: 39,
      birth: {
        date: "1983-01-27",
        place: "Hemel Hempstead",
        country: "England",
      },
      nationality: "England",
      height: "193 cm",
      weight: "83 kg",
      injured: false,
      photo: "https://media-2.api-sports.io/football/players/883.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Goalkeeper",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 895,
      name: "J. Garner",
      firstname: "James David",
      lastname: "Garner",
      age: 22,
      birth: {
        date: "2001-03-13",
        place: "Birkenhead",
        country: "England",
      },
      nationality: "England",
      height: "186 cm",
      weight: "78 kg",
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/895.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: "6.628571",
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 2,
        },
        shots: {
          total: 4,
          on: 2,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: 1,
          saves: null,
        },
        passes: {
          total: 233,
          key: 5,
          accuracy: 13,
        },
        tackles: {
          total: 13,
          blocks: null,
          interceptions: 10,
        },
        duels: {
          total: 67,
          won: 36,
        },
        dribbles: {
          attempts: 9,
          success: 5,
          past: null,
        },
        fouls: {
          drawn: 7,
          committed: 11,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 897,
      name: "M. Greenwood",
      firstname: "Mason Will John",
      lastname: "Greenwood",
      age: 21,
      birth: {
        date: "2001-10-01",
        place: "Bradford",
        country: "England",
      },
      nationality: "England",
      height: "181 cm",
      weight: "70 kg",
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/897.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 906,
      name: "T. Chong",
      firstname: "Tahith Jose",
      lastname: "Chong",
      age: 24,
      birth: {
        date: "1999-12-04",
        place: "Willemstad",
        country: "Curaçao",
      },
      nationality: "Netherlands",
      height: "185 cm",
      weight: "75 kg",
      injured: false,
      photo: "https://media-2.api-sports.io/football/players/906.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 2931,
      name: "T. Heaton",
      firstname: "Thomas David",
      lastname: "Heaton",
      age: 37,
      birth: {
        date: "1986-04-15",
        place: "Chester",
        country: "England",
      },
      nationality: "England",
      height: "188 cm",
      weight: "85 kg",
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/2931.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Goalkeeper",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 23,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Goalkeeper",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 9,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
    ],
  },
  {
    player: {
      id: 18886,
      name: "M. Dúbravka",
      firstname: "Martin",
      lastname: "Dúbravka",
      age: 34,
      birth: {
        date: "1989-01-15",
        place: "Žilina",
        country: "Slovakia",
      },
      nationality: "Slovakia",
      height: "190 cm",
      weight: "83 kg",
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/18886.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Goalkeeper",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 4,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Goalkeeper",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 5,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
    ],
  },
  {
    player: {
      id: 19182,
      name: "A. Tuanzebe",
      firstname: "Axel",
      lastname: "Tuanzebe",
      age: 26,
      birth: {
        date: "1997-11-14",
        place: "Bunia",
        country: "Congo DR",
      },
      nationality: "England",
      height: "186 cm",
      weight: "75 kg",
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/19182.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-2.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 20319,
      name: "N. Bishop",
      firstname: "Nathan James",
      lastname: "Bishop",
      age: 24,
      birth: {
        date: "1999-10-15",
        place: "Hillingdon",
        country: "England",
      },
      nationality: "England",
      height: "185 cm",
      weight: "72 kg",
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/20319.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Goalkeeper",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 4,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: 0,
        },
      },
    ],
  },
  {
    player: {
      id: 153429,
      name: "T. Mengi",
      firstname: "Teden Mambuene",
      lastname: "Mengi",
      age: 20,
      birth: {
        date: "2002-04-30",
        place: "Manchester",
        country: "England",
      },
      nationality: "England",
      height: "183 cm",
      weight: "78 kg",
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/153429.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-2.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 48,
          name: "League Cup",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/48.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 45,
          name: "FA Cup",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/45.png",
          flag: "https://media-2.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 2,
          lineups: 2,
          minutes: 65,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 2,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 157997,
      name: "A. Diallo",
      firstname: "Amad",
      lastname: "Diallo Traoré",
      age: 21,
      birth: {
        date: "2002-07-11",
        place: "Abidjan",
        country: "Côte d'Ivoire",
      },
      nationality: "Côte d'Ivoire",
      height: "173 cm",
      weight: "72 kg",
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/157997.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-1.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 180560,
      name: "H. Mejbri",
      firstname: "Hannibal",
      lastname: "Mejbri",
      age: 20,
      birth: {
        date: "2003-01-21",
        place: null,
        country: "France",
      },
      nationality: "Tunisia",
      height: "177 cm",
      weight: "74 kg",
      injured: false,
      photo: "https://media-2.api-sports.io/football/players/180560.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-2.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-2.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 216770,
      name: "I. Hansen-Aarøen",
      firstname: "Isak",
      lastname: "Hansen-Aarøen",
      age: 18,
      birth: {
        date: "2004-08-22",
        place: "Tromsø",
        country: "Norway",
      },
      nationality: "Norway",
      height: "173 cm",
      weight: null,
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/216770.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-2.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 3,
          lineups: 1,
          minutes: 95,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 1,
          bench: 2,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 282132,
      name: "Charlie Gerard Richard Wellens",
      firstname: "Charlie Gerard Richard",
      lastname: "Wellens",
      age: 20,
      birth: {
        date: "2002-12-05",
        place: null,
        country: "England",
      },
      nationality: "England",
      height: null,
      weight: null,
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/282132.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 1,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 282136,
      name: "N. Emeran",
      firstname: "Noam",
      lastname: "Fritz Emeran",
      age: 20,
      birth: {
        date: "2002-09-24",
        place: "Paray-le-Monial",
        country: "France",
      },
      nationality: "France",
      height: "179 cm",
      weight: null,
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/282136.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 2,
          lineups: 0,
          minutes: 71,
          number: null,
          position: "Attacker",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 0,
          bench: 2,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 284362,
      name: "B. Hardley",
      firstname: "Björn Bryan",
      lastname: "Hardley",
      age: 20,
      birth: {
        date: "2002-12-19",
        place: "Tilburg",
        country: "Netherlands",
      },
      nationality: "Netherlands",
      height: "189 cm",
      weight: null,
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/284362.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-2.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 2,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 284391,
      name: "S. Murray",
      firstname: "Sam",
      lastname: "Murray",
      age: 18,
      birth: {
        date: "2004-09-25",
        place: null,
        country: "England",
      },
      nationality: "England",
      height: null,
      weight: null,
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/284391.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 2,
          lineups: 0,
          minutes: 88,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 2,
          out: 0,
          bench: 2,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 288107,
      name: "C. McNeill",
      firstname: "Charlie Martin",
      lastname: "McNeill",
      age: 20,
      birth: {
        date: "2003-09-09",
        place: "Droylsden",
        country: "England",
      },
      nationality: "England",
      height: "181 cm",
      weight: null,
      injured: false,
      photo: "https://media-2.api-sports.io/football/players/288107.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 1,
          lineups: 0,
          minutes: 7,
          number: null,
          position: "Attacker",
          rating: "6.300000",
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 0,
          bench: 2,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: 1,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 303010,
      name: "D. Gore",
      firstname: "Daniel",
      lastname: "Gore",
      age: 18,
      birth: {
        date: "2004-09-26",
        place: null,
        country: "England",
      },
      nationality: "England",
      height: null,
      weight: null,
      injured: false,
      photo: "https://media-3.api-sports.io/football/players/303010.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-3.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Midfielder",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 1,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
  {
    player: {
      id: 328101,
      name: "T. Fredricson",
      firstname: "Tyler",
      lastname: "Fredricson",
      age: 17,
      birth: {
        date: "2005-02-23",
        place: null,
        country: "England",
      },
      nationality: "England",
      height: null,
      weight: null,
      injured: false,
      photo: "https://media-1.api-sports.io/football/players/328101.png",
    },
    statistics: [
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 39,
          name: "Premier League",
          country: "England",
          logo: "https://media-1.api-sports.io/football/leagues/39.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: null,
          lineups: null,
          minutes: null,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: null,
          out: null,
          bench: null,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: null,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: null,
          yellowred: null,
          red: null,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-1.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 48,
          name: "League Cup",
          country: "England",
          logo: "https://media-3.api-sports.io/football/leagues/48.png",
          flag: "https://media-1.api-sports.io/flags/gb.svg",
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 0,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-3.api-sports.io/football/teams/33.png",
        },
        league: {
          id: 3,
          name: "UEFA Europa League",
          country: "World",
          logo: "https://media-3.api-sports.io/football/leagues/3.png",
          flag: null,
          season: 2022,
        },
        games: {
          appearences: 0,
          lineups: 0,
          minutes: 0,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 0,
          out: 0,
          bench: 1,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: 0,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: 0,
          missed: 0,
          saved: null,
        },
      },
      {
        team: {
          id: 33,
          name: "Manchester United",
          logo: "https://media-2.api-sports.io/football/teams/33.png",
        },
        league: {
          id: null,
          name: "Club Friendlies",
          country: null,
          logo: null,
          flag: null,
          season: "2022",
        },
        games: {
          appearences: 1,
          lineups: 0,
          minutes: 44,
          number: null,
          position: "Defender",
          rating: null,
          captain: false,
        },
        substitutes: {
          in: 1,
          out: 0,
          bench: 1,
        },
        shots: {
          total: null,
          on: null,
        },
        goals: {
          total: 0,
          conceded: null,
          assists: null,
          saves: null,
        },
        passes: {
          total: null,
          key: null,
          accuracy: null,
        },
        tackles: {
          total: null,
          blocks: null,
          interceptions: null,
        },
        duels: {
          total: null,
          won: null,
        },
        dribbles: {
          attempts: null,
          success: null,
          past: null,
        },
        fouls: {
          drawn: null,
          committed: null,
        },
        cards: {
          yellow: 0,
          yellowred: 0,
          red: 0,
        },
        penalty: {
          won: null,
          commited: null,
          scored: null,
          missed: null,
          saved: null,
        },
      },
    ],
  },
])

const [selectedTeam, setSelectedTeam] = useState({
  id: 33,
  name: "Manchester United",
  code: "MUN",
  country: "England",
  founded: 1878,
  national: false,
  logo: "https://media-1.api-sports.io/football/teams/33.png",
})

const [selectedCountry, setSelectedCountry] = useState(countries[0].name)
const [selectedLeague, setSelectedLeague] = useState("")
const [selectedSeason, setSelectedSeason] = useState(currentSeason)

const [selectedTeamInfo, setSelectedTeamInfo] = useState({
  "league": {
    "id": 39,
    "name": "Premier League",
    "country": "England",
    "logo": "https://media-2.api-sports.io/football/leagues/39.png",
    "flag": "https://media-3.api-sports.io/flags/gb.svg",
    "season": 2019
  },
  "team": {
    "id": 33,
    "name": "Manchester United",
    "logo": "https://media-2.api-sports.io/football/teams/33.png"
  },
  "form": "WDLDWLDLDWLWDDWWDLWWLWLLDWWDWDWWWWDWDW",
  "fixtures": {
    "played": {
      "home": 19,
      "away": 19,
      "total": 38
    },
    "wins": {
      "home": 10,
      "away": 8,
      "total": 18
    },
    "draws": {
      "home": 7,
      "away": 5,
      "total": 12
    },
    "loses": {
      "home": 2,
      "away": 6,
      "total": 8
    }
  },
  "goals": {
    "for": {
      "total": {
        "home": 40,
        "away": 26,
        "total": 66
      },
      "average": {
        "home": "2.1",
        "away": "1.4",
        "total": "1.7"
      },
      "minute": {
        "0-15": {
          "total": 4,
          "percentage": "6.06%"
        },
        "16-30": {
          "total": 17,
          "percentage": "25.76%"
        },
        "31-45": {
          "total": 11,
          "percentage": "16.67%"
        },
        "46-60": {
          "total": 13,
          "percentage": "19.70%"
        },
        "61-75": {
          "total": 10,
          "percentage": "15.15%"
        },
        "76-90": {
          "total": 8,
          "percentage": "12.12%"
        },
        "91-105": {
          "total": 3,
          "percentage": "4.55%"
        },
        "106-120": {
          "total": null,
          "percentage": null
        }
      }
    },
    "against": {
      "total": {
        "home": 17,
        "away": 19,
        "total": 36
      },
      "average": {
        "home": "0.9",
        "away": "1.0",
        "total": "0.9"
      },
      "minute": {
        "0-15": {
          "total": 6,
          "percentage": "16.67%"
        },
        "16-30": {
          "total": 3,
          "percentage": "8.33%"
        },
        "31-45": {
          "total": 7,
          "percentage": "19.44%"
        },
        "46-60": {
          "total": 9,
          "percentage": "25.00%"
        },
        "61-75": {
          "total": 3,
          "percentage": "8.33%"
        },
        "76-90": {
          "total": 5,
          "percentage": "13.89%"
        },
        "91-105": {
          "total": 3,
          "percentage": "8.33%"
        },
        "106-120": {
          "total": null,
          "percentage": null
        }
      }
    }
  },
  "biggest": {
    "streak": {
      "wins": 4,
      "draws": 2,
      "loses": 2
    },
    "wins": {
      "home": "4-0",
      "away": "0-3"
    },
    "loses": {
      "home": "0-2",
      "away": "2-0"
    },
    "goals": {
      "for": {
        "home": 5,
        "away": 3
      },
      "against": {
        "home": 2,
        "away": 3
      }
    }
  },
  "clean_sheet": {
    "home": 7,
    "away": 6,
    "total": 13
  },
  "failed_to_score": {
    "home": 2,
    "away": 6,
    "total": 8
  },
  "penalty": {
    "scored": {
      "total": 10,
      "percentage": "100.00%"
    },
    "missed": {
      "total": 0,
      "percentage": "0%"
    },
    "total": 10
  },
  "lineups": [
    {
      "formation": "4-2-3-1",
      "played": 32
    },
    {
      "formation": "3-4-1-2",
      "played": 4
    },
    {
      "formation": "3-4-2-1",
      "played": 1
    },
    {
      "formation": "4-3-1-2",
      "played": 1
    }
  ],
  "cards": {
    "yellow": {
      "0-15": {
        "total": 5,
        "percentage": "6.85%"
      },
      "16-30": {
        "total": 5,
        "percentage": "6.85%"
      },
      "31-45": {
        "total": 16,
        "percentage": "21.92%"
      },
      "46-60": {
        "total": 12,
        "percentage": "16.44%"
      },
      "61-75": {
        "total": 14,
        "percentage": "19.18%"
      },
      "76-90": {
        "total": 21,
        "percentage": "28.77%"
      },
      "91-105": {
        "total": null,
        "percentage": null
      },
      "106-120": {
        "total": null,
        "percentage": null
      }
    },
    "red": {
      "0-15": {
        "total": null,
        "percentage": null
      },
      "16-30": {
        "total": null,
        "percentage": null
      },
      "31-45": {
        "total": null,
        "percentage": null
      },
      "46-60": {
        "total": null,
        "percentage": null
      },
      "61-75": {
        "total": null,
        "percentage": null
      },
      "76-90": {
        "total": null,
        "percentage": null
      },
      "91-105": {
        "total": null,
        "percentage": null
      },
      "106-120": {
        "total": null,
        "percentage": null
      }
    }
  }
})
