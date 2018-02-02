import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductRow extends Component {
  render () {
    const product = this.props.product
    const name = product.name
    const price = product.price
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    )
  }
}

ProductRow.propTypes = {
  product: PropTypes.object
}

export default ProductRow
