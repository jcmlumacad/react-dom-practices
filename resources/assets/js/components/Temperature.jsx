import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Temperature extends Component {
  constructor (props) {
    super(props)
    this.scales = {
      c: 'Celsius',
      f: 'Fahrenheit'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const temperature = event.target.value
    this.props.onTemperatureChange(temperature)
    event.preventDefault()
  }

  render () {
    const scale = this.props.scale
    const temperature = this.props.temperature
    return (
      <fieldset>
        <div className='form-group'>
          <label>Enter temperature in {this.scales[scale]}</label>
          <input onChange={this.handleChange} value={temperature} className='form-control' />
        </div>
      </fieldset>
    )
  }
}

Temperature.propTypes = {
  scale: PropTypes.string,
  temperature: PropTypes.string,
  onTemperatureChange: PropTypes.func
}
