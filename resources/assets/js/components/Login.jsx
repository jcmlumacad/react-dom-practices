import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
  render () {
    return (
      <button onClick={this.props.handleClick} className='btn btn-info'>
        Login
      </button>
    )
  }
}

Login.propTypes = {
  handleClick: PropTypes.func
}

export default Login
