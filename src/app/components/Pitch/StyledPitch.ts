import styled from 'styled-components'

export default styled.div`
  text-align: center;
  background: url('assets/pitch-bg.png');
  padding: 2rem;

  > div {
    align-items: center;
  }

  @media(max-width: 600px) {
    padding: 2rem 0;
  }
`
