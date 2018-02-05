import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentText extends Component {
  render () {
    return <div className='Comment-text'>{this.props.text}</div>
  }
}

CommentText.propTypes = {
  text: PropTypes.string
}
