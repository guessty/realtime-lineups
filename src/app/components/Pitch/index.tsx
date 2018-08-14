import * as React from 'react'
import { Grid } from 'react-grid-flexbox'
//
import StyledPitch from './StyledPitch'
import { PITCH_FORMATIONS } from './constants'

interface IPitchProps {
  formationType: string
  children?: any
}

interface IChildProps {
  formationPlace: string | number
}

const Pitch = (props:IPitchProps) => {
  const PlacedChildren = React.Children.map(props.children, (child: React.ReactElement<IChildProps>) => {
    return (
      <div data-grid-area={`_${child.props.formationPlace}`}>
        {child}
      </div>
    )
  })
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Pitch
