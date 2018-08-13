import styled from 'styled-components'

export default styled.div`
  text-align: center;

  .player {
    position: relative;
    padding: 2rem;
    font-size: 1rem;

    &__details {
      margin: 0 0 1rem;
      color: white;
      font-size: 1.6em;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__shirt {
      background: url('assets/player-shirt.png');
      background-repeat: no-repeat;
      background-size: 5em auto;
      position: relative;
      height: 5em;
      width: 5em;
      left: 50%;
      transform: translateX(-50%);
    }

    @media(max-width: 600px) {
      font-size: 0.9rem;
      padding: 2rem 1rem;
    }

    @media(max-width: 500px) {
      font-size: 0.8rem;
      padding: 2rem: 0.9rem;
    }
  }
`
