import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductRow extends Component {
  render () {
    const product = this.props.product
    const name = product.name
    const price = product.price
    let stockClass = product.stocked === false ? 'text-danger' : ''
    return (
      <tr>
        <td className={stockClass}>{name}</td>
        <td className={stockClass}>{price}</td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  product: PropTypes.object
}

export default ProductRow
