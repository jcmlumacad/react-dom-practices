import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormattedDate extends Component {
  render () {
    return <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
  }
}

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default FormattedDate
