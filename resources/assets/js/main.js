import 'bootstrap'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/dropdown'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

render(App)
