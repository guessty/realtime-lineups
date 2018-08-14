import axios from 'axios'


export const TEAM_LINEUP_URL =
  process.env.REACT_STATIC_ENV === 'production' ?
    'https://us-central1-team-lineups.cloudfunctions.net/fecthTeamLineup' : 'http://lineups.dev.fantech.io'

export const fetchTeamLineup = () => axios.get(TEAM_LINEUP_URL)
