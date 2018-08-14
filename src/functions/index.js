const functions = require('firebase-functions')
const request = require('request')

exports.fecthTeamLineup = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET')
  request('http://lineups.dev.fantech.io', (error, response, body) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).send(body)
  })
})
