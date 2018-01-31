import React, { Component } from 'react'

class CommentDate extends Component {
  formatDate (date) {
    console.log('date', date)
  }

  render () {
    return (
      <div className='Comment-date'>
        { this.formatDate(this.prop.date) }
      </div>
    )
  }
}

export default CommentDate
