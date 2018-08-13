import React from 'react'
//
import StyledLoader from './StyledLoader'

const LOADING = 'Loading...'

export default () => (
  <StyledLoader>
    <h1>{LOADING}</h1>
  </StyledLoader>
)
