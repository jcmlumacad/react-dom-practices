import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UserInfo } from './UserInfo'
import { CommentText } from './CommentText'
import { CommentDate } from './CommentDate'

class Comment extends Component {
  render () {
    return (
      <div className='Comment'>
        <UserInfo user={this.props.author} />
        <CommentText text={this.props.text} />
        <CommentDate date={this.props.date} />
      </div>
    )
  }
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.instanceOf(Date)
}

export default Comment
