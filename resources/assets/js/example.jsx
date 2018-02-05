import 'bootstrap'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Comment from '@component/example/Comment'

const comment = {
  date: new Date(),
  text: 'This is a test comment',
  author: {
    avatarUrl: 'http://via.placeholder.com/100x100',
    name: 'John Doe'
  }
}

class App extends Component {
  render () {
    return (
      <Comment {...comment} />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
