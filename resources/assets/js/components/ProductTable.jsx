import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ProductCategoryRow from '@component/ProductCategoryRow'
import ProductRow from '@component/ProductRow'

class ProductTable extends Component {
  render () {
    const filter = this.props.filter
    const products = this.props.productLists

    let rows = []
    let lastCategory = null

    _.forEach(products, (product, key) => {
      if (filter.hasStock && filter.hasStock !== product.stocked) return null

      if (!product.name.includes(filter.name)) return null

      if (lastCategory !== product.category) {
        rows.push(
          <ProductCategoryRow name={product.category} key={'category-' + key} />
        )
      }

      rows.push(
        <ProductRow product={product} key={'product-' + key} />
      )

      lastCategory = product.category
    })

    return (
      <table className='table table-bordered table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

ProductTable.propTypes = {
  productLists: PropTypes.array,
  filter: PropTypes.object
}

export default ProductTable
