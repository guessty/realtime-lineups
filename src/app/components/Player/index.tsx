import * as React from 'react'
//
import StyledPlayer from './StyledPlayer'

interface PlayerProps {
  name: string
  position: string
  type:string
  formationPlace: string
}

const parseName = (name:string) => name.split(' ').slice(1).join(' ')

const Player = (props:PlayerProps) => (
  <React.Fragment>
    <StyledPlayer>
      <div className="player">
        <h4 className="player__details">{parseName(props.name)}<br/>({props.position})</h4>
        <div className="player__shirt" />
      </div>
    </StyledPlayer>
  </React.Fragment>
);

export default Player
