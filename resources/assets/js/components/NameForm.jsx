import React, { Component } from 'react'
import swal from 'sweetalert'

export default class NameForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    swal(`A name was submitted: ${this.state.value}`)
    event.preventDefault()
  }

  handleChange (event) {
    let value = event.target.value
    this.setState({ value })
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' value={this.state.value} onChange={this.handleChange} className='form-control' />
        </div>
        <button className='btn btn-success' type='submit' value='Submit'>Submit</button>
      </form>
    )
  }
}
