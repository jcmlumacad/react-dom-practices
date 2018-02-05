import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListItem extends Component {
  render () {
    return <li>{this.props.value * 2}</li>
  }
}

ListItem.propTypes = {
  value: PropTypes.number
}
