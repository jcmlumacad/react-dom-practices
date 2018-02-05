import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserInfo from '@component/example/UserInfo'
import CommentText from '@component/example/CommentText'
import CommentDate from '@component/example/CommentDate'

export default class Comment extends Component {
  render () {
    return (
      <div className='Comment'>
        <UserInfo {...this.props.author} />
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
