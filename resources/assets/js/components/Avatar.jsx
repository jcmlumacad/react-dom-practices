import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Avatar extends Component {
  render () {
    return <img className='Avatar'
      src={this.props.user.avatarUrl}
      alt={this.props.user.name} />
  }
}

Avatar.propTypes = {
  user: PropTypes.object
}

export default Avatar
