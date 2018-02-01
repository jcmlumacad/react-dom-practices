import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  render () {
    return (
      <div className={'card mb-3 border-' + this.props.borderName}>
        <div className='card-header'>
          {this.props.header}
        </div>
        <div className={'card-body text-' + this.props.borderName}>
          {this.props.title
            ? <h5 className='card-title'>
              this.props.title
            </h5>
            : ''
          }
          <div className='card-text'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  borderName: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export default Card
