import React, { Component } from 'react'
import BoilingVerdict from '@component/BoilingVerdict'
import Temperature from '@component/Temperature'

class Calculator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperature: '',
      scale: 'c'
    }
    this.handleCelsius = this.handleCelsius.bind(this)
    this.handleFahrenheit = this.handleFahrenheit.bind(this)
  }

  handleCelsius (temperature) {
    this.setState({ temperature, scale: 'c' })
  }

  handleFahrenheit (temperature) {
    this.setState({ temperature, scale: 'f' })
  }

  toCelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
  }

  toFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32
  }

  tryConvert (temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  render () {
    const temperature = this.state.temperature
    const scale = this.state.scale
    const celsius = (scale === 'f') ? this.tryConvert(temperature, this.toCelsius) : temperature
    const fahrenheit = (scale === 'c') ? this.tryConvert(temperature, this.toFahrenheit) : temperature
    return (
      <div>
        <Temperature scale='c' temperature={celsius} onTemperatureChange={this.handleCelsius} />
        <Temperature scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheit} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

export default Calculator
