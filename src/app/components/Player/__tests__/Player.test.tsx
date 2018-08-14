import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as renderer from 'react-test-renderer'
//
import Player from './../index'
// import { PITCH_FORMATIONS } from './../constants'

Enzyme.configure({adapter: new Adapter()})


describe('<Player />', () => {
  let component: any
  let componentWrapper: any
  const props = {
    name: 'player 1',
    position: 'GK',
    type: 'Goal Keeper',
    formationPlace: '1'
  }

  beforeEach(() => {
    component = (
      <Player {...props} />
    )
    componentWrapper = Enzyme.shallow(component, {})
  })

  it('should be defined', () => {
    expect(Player).toBeDefined()
  })

  it('should render', () => {
    expect(componentWrapper.length).toEqual(1)
  })

  it('capturing Snapshot of Player', () => {
    const renderedValue =  renderer.create(component).toJSON()
    expect(renderedValue).toMatchSnapshot();
  })
})

