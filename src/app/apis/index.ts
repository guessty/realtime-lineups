import axios from 'axios'

export const TEAM_LINEUP_URL = 'http://lineups.dev.fantech.io'

export const fetchTeamLineup = () => axios.get(TEAM_LINEUP_URL)
