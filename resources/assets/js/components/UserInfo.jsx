import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from './Avatar'

class UserInfo extends React.Component {
  render () {
    return (
      <div className='UserInfo'>
        <Avatar user={this.props.author} />
        <div className='UserInfo-name'>
          {this.props.author.name}
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  author: PropTypes.object
}

export default UserInfo
