import * as React from 'react'
//
import StyledLoader from './StyledLoader'

const LOADING = 'Loading...'

export default () => (
  <React.Fragment>
    <StyledLoader>
      <h1>{LOADING}</h1>
    </StyledLoader>
  </React.Fragment>
)
