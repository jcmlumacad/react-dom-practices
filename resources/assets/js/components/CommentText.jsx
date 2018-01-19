import React from 'react'
import PropTypes from 'prop-types'

class CommentText extends React.Component {
  render () {
    return <div className='Comment-text'>{this.props.text}</div>
  }
}

CommentText.propTypes = {
  text: PropTypes.string
}

export default CommentText
