import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
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
    return (
      <div>
        {/* <h1>Hello, world!</h1> */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Clock />
        <Clock />
        <Clock />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
