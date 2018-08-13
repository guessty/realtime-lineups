import styled from 'styled-components'

export default styled.div`
  .team-lineup {
    
    &__header {
      padding: 0 2rem;

      h1, p {
        text-align: center;
      }
    }
  }

  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`
