import React, { ReactElement } from 'react'
import { Grid } from 'react-grid-flexbox'
//
import StyledPitch from './StyledPitch'
import { PITCH_FORMATIONS } from './constants'

interface IPitchProps {
  children: any
  formationType: string
}

interface IChildProps {
  formationPlace: string | number
}

const Pitch = (props:IPitchProps) => {
  const PlacedChildren = React.Children.map(props.children, (child: ReactElement<IChildProps>) => {
    return (
      <div _gridArea={`_${child.props.formationPlace}`}>
        {child}
      </div>
    )
  })
  return (
    <StyledPitch className="pitch">
      <Grid
        templateAreas={PITCH_FORMATIONS[props.formationType]}
        templateColumns={{
          tn: '1fr',
          '321px': 'repeat(20, 1fr)',
        }}
      >
        {PlacedChildren}
      </Grid>
    </StyledPitch>
  )
}

export default Pitch
