import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductCategoryRow extends Component {
  render () {
    const name = this.props.name
    return (
      <div className='row'>
        <div className='col text-center font-weight-bold border border-primary'>
          {name}
        </div>
      </div>
    )
  }
}

ProductCategoryRow.propTypes = {
  name: PropTypes.string
}

export default ProductCategoryRow
