import * as React from 'react'
const moment = require('moment')
//
import Pitch from './../../components/Pitch'
import Player from './../../components/Player'
import Loader from './../../components/Loader'
import socket, { CHANNELS, EVENTS } from './../../config/pusher'
import { fetchTeamLineup as fetchLineup } from './../../apis'
//
import StyledTeamLineup from './StyledTeamLineup'
import { TEXT, DATETIME_FORMAT } from './constants'


interface ITeamLineupProps {}

interface ITeamLineupState {
  loading: boolean
  lineupData?: ILineupDataProps
  lastUpdated: string
}

interface ILineupDataProps {
  team?: string
  players?: [object]
  formation?: string
}

interface IPlayerProps {
  name:string
  type: string
  position: string
  formation_place: string
}

class TeamLineup extends React.PureComponent<ITeamLineupProps,ITeamLineupState> {
  static channel: any = null
  constructor(props: ITeamLineupProps) {
    super(props);
    this.state = {
      loading: true,
      lineupData: {
        team: undefined,
        players: undefined,
        formation: undefined
      },
      lastUpdated: this.now(),
    };
  }
  componentDidMount() {
    this.fetchTeamLineup()
  }
  componentWillUnmount() {
    TeamLineup.channel.unbind(EVENTS.LINEUP_UPDATED, this.updateLineupData)
  }
  fetchTeamLineup = () => {
    fetchLineup()
      .then((response) => {
        this.updateLineupData(response.data)
        this.setState({
          loading: false,
        })
        TeamLineup.channel = socket.subscribe(CHANNELS.LINEUPS);
        if (TeamLineup.channel) {
          TeamLineup.channel.bind(EVENTS.LINEUP_UPDATED, this.updateLineupData)
        }
      })
  }
  now = () => {
    return moment().format(DATETIME_FORMAT)
  }
  updateLineupData = (lineupData: ILineupDataProps) => {
    this.setState({ lineupData, lastUpdated: this.now() })
  }
  render() {
    const { lineupData, lastUpdated, loading } = this.state
    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <StyledTeamLineup>
              <div className="team-lineup">
                <div className="team-lineup__header">
                  <h1>{TEXT.HEADER} {lineupData.team}</h1>
                  <p><strong>{TEXT.FORMATION}</strong> {lineupData.formation}</p>
                    <p><strong>{TEXT.UPDATED}</strong> {lastUpdated}</p>
                </div>
                <Pitch formationType={lineupData.formation}>
                  {
                    lineupData.players ? lineupData.players.map((player:IPlayerProps) => (
                      <Player
                        key={player.formation_place}
                        name={player.name}
                        position={player.position}
                        type={player.type}
                        formationPlace={player.formation_place}
                      />
                    )) : null
                  }
                </Pitch>
              </div>
            </StyledTeamLineup>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default TeamLineup;
