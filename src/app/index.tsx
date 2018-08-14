import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Your top level component
import App from './layouts/App'

// Export your top level component as JSX (for static rendering)
export default App

interface RenderProps {
  Comp: any;
}

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = (props: RenderProps) => {
    renderMethod(<props.Comp />, document.getElementById('root'))
  }

  // Render!
  render({ Comp: App })
}
