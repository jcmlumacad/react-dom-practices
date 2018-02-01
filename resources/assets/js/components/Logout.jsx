import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Logout extends Component {
  render () {
    return (
      <button onClick={this.props.handleClick} className='btn btn-danger'>
        Logout
      </button>
    )
  }
}

Logout.propTypes = {
  handleClick: PropTypes.func
}

export default Logout
