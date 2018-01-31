import React, { Component } from 'react'

class Toggle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(previous => ({
      isToggleOn: !previous.isToggleOn
    }))
  }

  render () {
    return (
      <a href='#' onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</a>
    )
  }
}

export default Toggle
