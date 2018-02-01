import React, { Component } from 'react'
import Navbar from '@component/Navbar'
import Jumbotron from '@component/Jumbotron'
import Clock from '@component/Clock'
import Toggle from '@component/Toggle'
import Login from '@component/Login'
import Logout from '@component/Logout'
import Greeting from '@component/Greeting'
import NumberList from '@component/NumberList'
import NameForm from '@component/NameForm'
import Calculator from '@component/Calculator'
import FancyBorder from '@component/FancyBorder'
import Card from '@component/Card'

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
        <Navbar />
        <Jumbotron />
        <div className='container'>
          <Card header='Clock Component' borderName='primary'>
            <Clock />
            <Clock />
            <Clock />
          </Card>

          <Card header='Click' borderName='primary'>
            <button onClick={this.handleClickMe} className='btn btn-default'>Click me!!</button>
          </Card>

          <Card header='Toggle' borderName='primary'>
            <Toggle />
          </Card>

          <Card header={<Greeting isLoggedIn={this.state.isLoggedIn} />} borderName='primary'>
            {this.state.isLoggedIn
              ? (<Logout handleClick={this.handleClick} />)
              : (<Login handleClick={this.handleClick} />)}
          </Card>

          <Card header='Number List' borderName='success'>
            <NumberList numbers={numbers} />
          </Card>

          <Card header='Form' borderName='info'>
            <NameForm />
          </Card>

          <Card header='Calculator' borderName='danger'>
            <Calculator />
          </Card>

          <Card header='Fancy Border' borderName='primary'>
            <FancyBorder color='blue'>
              <h1 className='Dialog-title'>
                Welcome
              </h1>
              <p className='Dialog-message'>
                Thank you for visiting our spacecraft!
              </p>
            </FancyBorder>
          </Card>

          <Card header='Product' borderName='dark'>
            <fieldset>
              <div className='form-group'>
                <input type='text' placeholder='Search ...' value='' className='form-control' />
                <input type='checkbox' /> Only shows products in stock
              </div>
            </fieldset>
            <div>
              <table className='table table-bordered table-hover'>
                <thead>
                  <th>Name</th>
                  <th>Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan='2'><b>Sporting Goods</b></td>
                  </tr>
                  <tr>
                    <td>Football</td>
                    <td>$ 49.99</td>
                  </tr>
                  <tr>
                    <td>Baseball</td>
                    <td>$ 9.99</td>
                  </tr>
                  <tr>
                    <td>Basketball</td>
                    <td>$ 29.99</td>
                  </tr>
                  <tr>
                    <td><b>Electronics</b></td>
                    <td />
                  </tr>
                  <tr>
                    <td>iPod Touch</td>
                    <td>$ 99.99</td>
                  </tr>
                  <tr>
                    <td>iPhone 5</td>
                    <td>$ 399.99</td>
                  </tr>
                  <tr>
                    <td>Nexus 7</td>
                    <td>$ 199.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default App
