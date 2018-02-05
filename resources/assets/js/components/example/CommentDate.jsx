import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentDate extends Component {
  formatDate (date) {
    console.log('date', date)
  }

  render () {
    return (
      <div className='Comment-date'>
        { this.formatDate(this.props.date) }
      </div>
    )
  }
}

CommentDate.propTypes = {
  date: PropTypes.instanceOf(Date)
}
