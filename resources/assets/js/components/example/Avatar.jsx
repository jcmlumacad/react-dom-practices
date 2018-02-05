import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Avatar extends Component {
  render () {
    return <img className='Avatar'
      src={this.props.avatarUrl}
      alt={this.props.name} />
  }
}

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string
}
