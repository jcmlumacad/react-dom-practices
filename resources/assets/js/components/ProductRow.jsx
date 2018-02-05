import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductRow extends Component {
  render () {
    let stockClass = this.props.stocked === false ? 'text-danger' : ''
    return (
      <tr>
        <td className={stockClass}>{this.props.name}</td>
        <td className={stockClass}>{this.props.price}</td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  stocked: PropTypes.bool
}

export default ProductRow
