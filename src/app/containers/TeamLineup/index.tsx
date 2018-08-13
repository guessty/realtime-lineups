import React from 'react'
import axios from 'axios'
import moment from 'moment'
//
import Pitch from './../../components/Pitch'
import Player from './../../components/Player'
import Loader from './../../components/Loader'
import socket, { CHANNELS, EVENTS } from './../../config/pusher'
//
import StyledTeamLineup from './StyledTeamLineup'
import { TEXT, DATETIME_FORMAT, FETCH_URL } from './constants'

interface ITeamLineupProps {}

interface ITeamLineupState {
  loading: boolean
  lineupData?: ILineupDataProps
  lastUpdated: string
  showTransition: boolean
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
  static now = () => moment().format(DATETIME_FORMAT)
  constructor(props: ITeamLineupProps) {
    super(props);
    this.state = {
      loading: true,
      lineupData: {
        team: undefined,
        players: undefined,
        formation: undefined
      },
      lastUpdated: TeamLineup.now(),
      showTransition: false,
    };
  }
  componentDidMount() {
    axios.get(FETCH_URL)
      .then((response) => {
        this.updateLineupData(response.data)
        this.setState({
          loading: false,
          showTransition: true,
        })
        TeamLineup.channel = socket.subscribe(CHANNELS.LINEUPS);
        if (TeamLineup.channel) {
          TeamLineup.channel.bind(EVENTS.LINEUP_UPDATED, this.updateLineupData)
        }
      })
  }
  componentWillUnmount() {
    TeamLineup.channel.unbind(EVENTS.LINEUP_UPDATED, this.updateLineupData)
  }
  updateLineupData = (lineupData: ILineupDataProps) => {
    this.setState({ lineupData, lastUpdated: TeamLineup.now(), showTransition: true })
  }
  render() {
    const { lineupData, lastUpdated, loading, showTransition } = this.state
    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    );
  }
}

export default TeamLineup;
