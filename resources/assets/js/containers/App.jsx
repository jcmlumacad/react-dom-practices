import React, { Component } from 'react'
import Clock from '@component/Clock'
import Toggle from '@component/Toggle'
import Login from '@component/Login'
import Logout from '@component/Logout'
import Greeting from '@component/Greeting'

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
    // let button
    // if (this.state.isLoggedIn) {
    //   button = <Logout handleClick={this.handleClick} />
    // } else {
    //   button = <Login handleClick={this.handleClick} />
    // }
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
        {/*! this.state.isLoggedIn && <Login handleClick={this.handleClick} /> */}
      </div>
    )
  }
}

export default App
