import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BoilingVerdict extends Component {
  render () {
    if (this.props.celsius >= 100) {
      return <p>The water would boil.</p>
    }

    return <p>The water would not boil.</p>
  }
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number
}
