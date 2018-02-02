import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ProductCategoryRow extends Component {
  render () {
    const name = this.props.name
    return (
      <tr>
        <td colSpan='2'>
          <b>{name}</b>
        </td>
      </tr>
    )
  }
}

ProductCategoryRow.propTypes = {
  name: PropTypes.string
}

export default ProductCategoryRow
