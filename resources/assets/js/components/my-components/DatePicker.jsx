import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DatePicker extends Component {
  render () {
    return <div>Imagine a {this.props.color} datepicker here.</div>
  }
}

DatePicker.propTypes = {
  color: PropTypes.string
}
