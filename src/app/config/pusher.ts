const Pusher = require('pusher-js')

const APP_KEY = '6a3acdaba86ad858948b'
const APP_CLUSTER = 'eu'

export const CHANNELS = {
  LINEUPS: 'lineups',
}

export const EVENTS = {
  LINEUP_UPDATED: 'lineup-updated',
}

const pusher = new Pusher(APP_KEY, {
  cluster: APP_CLUSTER,
})

export default pusher
