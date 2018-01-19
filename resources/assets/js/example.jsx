import React from 'react'
import ReactDOM from 'react-dom'
import { Comment } from './components/Comment'

const comment = {
  date: new Date(),
  text: 'This is a test comment',
  author: {
    avatarUrl: 'http://via.placeholder.com/100x100',
    name: 'John Doe'
  }
}

class App extends React.Component {
  render () {
    return (
      <Comment
        text={comment.text}
        date={comment.date}
        author={comment.author} />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
