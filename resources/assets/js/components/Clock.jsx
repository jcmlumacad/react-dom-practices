import React, { Component } from 'react'
import FormattedDate from '@component/FormattedDate'

export default class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount () {
    console.log('mount')
    this.timerId = setInterval(() => this._tick(), 1000)
  }

  componentWillUnmount () {
    console.log('unmount')
    clearInterval(this.timerId)
  }

  _tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return <FormattedDate date={this.state.date} />
  }
}
