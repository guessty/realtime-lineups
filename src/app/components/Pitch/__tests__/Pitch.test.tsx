import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as renderer from 'react-test-renderer'
//
import Pitch from './../index'
// import { PITCH_FORMATIONS } from './../constants'

Enzyme.configure({adapter: new Adapter()})


describe('<Pitch />', () => {
  let component: any
  let componentWrapper: any
  const props = {
    formationType: '442'
  }

  beforeEach(() => {
    component = (
      <Pitch {...props} />
    )
    componentWrapper = Enzyme.shallow(component, {})
  })

  it('should be defined', () => {
    expect(Pitch).toBeDefined()
  })

  it('should render', () => {
    expect(componentWrapper.length).toEqual(1)
  })
  
  it('capturing Snapshot of Pitch', () => {
    const renderedValue =  renderer.create(component).toJSON()
    expect(renderedValue).toMatchSnapshot();
  })
})

