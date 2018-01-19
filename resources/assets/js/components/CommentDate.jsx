import React from 'react'

class CommentDate extends React.Component {
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
