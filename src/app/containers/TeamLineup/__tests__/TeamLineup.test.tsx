import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as renderer from 'react-test-renderer'
//
import TeamLineup from './../index'
import Loader from './../../../components/Loader'
import Pitch from './../../../components/Pitch'
// import { PITCH_FORMATIONS } from './../constants'

Enzyme.configure({adapter: new Adapter()})


describe('<TeamLineup />', () => {
  let mockFetchTeamLineup = jest.fn();
  let component: any
  let componentDidMountSpy: any
  let componentWrapper: any
  const props = {}

  beforeEach(() => {
    TeamLineup.prototype.fetchTeamLineup = mockFetchTeamLineup
    componentDidMountSpy = jest.spyOn(TeamLineup.prototype, 'componentDidMount')
    component = (
      <TeamLineup {...props} />
    )
    componentWrapper = Enzyme.shallow(component, {})
  })

  afterEach(() => {
    componentDidMountSpy.mockClear()
  })

  it('should be defined', () => {
    expect(TeamLineup).toBeDefined()
  })

  it('should render', () => {
    expect(componentWrapper.length).toEqual(1)
  })

  it('should check componentDidMount is called', () => {
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
  })

  it('should check fetchTeamLineup is called', () => {
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
  })

  it('should capture Snapshot of TeamLineup', () => {
    const renderedValue =  renderer.create(component).toJSON()
    expect(renderedValue).toMatchSnapshot();
  })

  it('should check Pitch and Loader components exist on change loading state', () => {
    expect(componentWrapper.find(Pitch).length).toEqual(0) 
    expect(componentWrapper.find(Loader).length).toEqual(1) 
    componentWrapper.setState({ loading: false })
    expect(componentWrapper.find(Pitch).length).toEqual(1) 
    expect(componentWrapper.find(Loader).length).toEqual(0)
  })
})

