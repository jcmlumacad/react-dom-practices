import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class DatePicker2 extends Component {
  render () {
    return <div>Imagine a {this.props.color} datepicker2 here.</div>
  }
}

DatePicker2.propTypes = {
  color: PropTypes.string
}
