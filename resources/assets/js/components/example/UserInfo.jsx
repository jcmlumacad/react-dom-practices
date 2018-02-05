import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@component/example/Avatar'

export default class UserInfo extends Component {
  render () {
    return (
      <div className='UserInfo'>
        <Avatar {...this.props} />
        <div className='UserInfo-name'>
          {this.props.name}
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  name: PropTypes.string
}
