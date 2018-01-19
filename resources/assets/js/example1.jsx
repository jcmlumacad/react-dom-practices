import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const comment = {
  date: new Date(),
  text: 'This is a test comment',
  author: {
    avatarUrl: 'http://via.placeholder.com/100x100',
    name: 'John Doe'
  }
}

function formatDate (date) {
  return date.toLocaleDateString()
}

function App () {
  return <Comment
    text={comment.text}
    date={comment.date}
    author={comment.author} />
}

function Comment (props) {
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <CommentText text={props.text} />
      <CommentDate date={props.date} />
    </div>
  )
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date)
}

function UserInfo (props) {
  return (
    <div className='UserInfo'>
      <Avatar user={props.user} />
      <div className='UserInfo-name'>
        {props.user.name}
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  user: PropTypes.object
}

function Avatar (props) {
  return <img className='Avatar'
    src={props.user.avatarUrl}
    alt={props.user.name} />
}

Avatar.propTypes = {
  user: PropTypes.object
}

function CommentText (props) {
  return (
    <div className='Comment-text'>
      { props.text }
    </div>
  )
}

CommentText.propTypes = {
  text: PropTypes.string
}

function CommentDate (props) {
  return (
    <div className='Comment-date'>
      { formatDate(props.date) }
    </div>
  )
}

CommentDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
