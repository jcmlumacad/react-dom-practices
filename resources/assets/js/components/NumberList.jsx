import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListItem from '@component/ListItem'

class NumberList extends Component {
  render () {
    const numbers = this.props.numbers
    const listItems = numbers.map((number, index) => <ListItem key={index.toString()} value={number} />)
    return <ul>{listItems}</ul>
  }
}

NumberList.propTypes = {
  numbers: PropTypes.array
}

export default NumberList
