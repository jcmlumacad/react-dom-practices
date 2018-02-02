import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductRow extends Component {
  render () {
    const product = this.props.product
    const name = product.name
    const price = product.price
    return (
      <div className='row'>
        <div className='col border border-primary'>{name}</div>
        <div className='col border border-primary'>{price}</div>
      </div>
    )
  }
}

ProductRow.propTypes = {
  product: PropTypes.object
}

export default ProductRow
