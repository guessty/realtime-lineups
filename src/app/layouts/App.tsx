import * as React from 'react'
import { Router, Switch, Route } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import { injectGlobal } from 'styled-components'
//
import Home from './../pages/Home'

injectGlobal`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
  *, *:after, *:before {
    box-sizing: border-box !important;
  }
`

interface RoutesProps {
  getComponentForPath: any;
}

const RenderRoutes = ({ getComponentForPath }:RoutesProps) => (
  // The default renderer uses a catch all route to recieve the pathname
  <Route
    path="*"
    render={props => {
      // Get the component for this path
      let Comp = getComponentForPath(props.location.pathname)
      if (!Comp) {
        Comp = getComponentForPath('404')
      }
      // The component is rendered!
      return <Comp key={props.location.pathname} {...props} />
    }}
  />
)

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Routes>{RenderRoutes}</Routes>
    </Switch>
  </Router>
)

export default hot(module)(App)