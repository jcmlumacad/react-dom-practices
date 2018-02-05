import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FormattedDate extends Component {
  render () {
    return <div>It is {this.props.date.toLocaleTimeString()}.</div>
  }
}

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}
