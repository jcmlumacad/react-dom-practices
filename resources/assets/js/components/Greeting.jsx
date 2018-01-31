import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserGreeting from '@component/UserGreeting'
import GuestGreeting from '@component/GuestGreeting'

class Greeting extends Component {
  render () {
    if (this.props.isLoggedIn) {
      return (
        <UserGreeting />
      )
    }

    return (
      <GuestGreeting />
    )
  }
}

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Greeting
