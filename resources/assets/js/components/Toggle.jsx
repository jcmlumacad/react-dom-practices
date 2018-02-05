import React, { Component } from 'react'

export default class Toggle extends Component {
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
      <button className='btn btn-primary' onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    )
  }
}
