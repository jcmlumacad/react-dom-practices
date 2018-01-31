import React, { Component } from 'react'
import Clock from '@component/Clock'
import Toggle from '@component/Toggle'
import Login from '@component/Login'
import Logout from '@component/Logout'
import Greeting from '@component/Greeting'
import NumberList from '@component/NumberList'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleClickMe = this.handleClickMe.bind(this)
  }

  handleClick (event) {
    event.preventDefault()
    console.log('The link was clicked.')
    this.setState(previous => ({
      isLoggedIn: !previous.isLoggedIn
    }))
  }

  handleClickMe (event) {
    event.preventDefault()
    console.log('The link was clicked.')
  }

  render () {
    const numbers = [0, 2, 4, 6, 8]
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />

        <a href='#' onClick={this.handleClickMe}>Click me!!</a>
        <Toggle />
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn
          ? (<Logout handleClick={this.handleClick} />)
          : (<Login handleClick={this.handleClick} />)}
        <NumberList numbers={numbers} />
      </div>
    )
  }
}

export default App
