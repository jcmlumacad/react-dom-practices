import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FancyBorder extends Component {
  render () {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    )
  }
}

FancyBorder.propTypes = {
  color: PropTypes.string,
  children: PropTypes.array
}
