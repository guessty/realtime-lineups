import React from 'react'
import { Router, Link, Switch, Route } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import styled, { injectGlobal } from 'styled-components'
//
import Home from './../pages/Home'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  nav {
    width: 100%;
    background: #108db8;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
  .content {
    padding: 1rem;
  }
  img {
    max-width: 100%;
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
    <AppStyles>
      <div className="content">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Routes>{RenderRoutes}</Routes>
        </Switch>
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)