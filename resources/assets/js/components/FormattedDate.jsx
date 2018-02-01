import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FormattedDate extends Component {
  render () {
    return <div>It is {this.props.date.toLocaleTimeString()}.</div>
  }
}

FormattedDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}

export default FormattedDate
