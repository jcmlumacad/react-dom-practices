import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import ProductCategoryRow from '@component/ProductCategoryRow'
import ProductRow from '@component/ProductRow'

class ProductTable extends Component {
  render () {
    const filter = this.props.filter
    const products = this.props.productLists
    const filteredProducts = _.filter(products, item => item.name.includes(filter.name) && item.stocked === filter.hasStock)
    return (
      <div className='container'>
        <div className='product-header row'>
          <div className='col border border-primary'>
            <b>Name</b>
          </div>
          <div className='col border border-primary'>
            <b>Price</b>
          </div>
        </div>
        <div className='product-body'>
          {filteredProducts.map((filteredProduct, key) => {
            if (!key) {
              return (
                <div>
                  <ProductCategoryRow name={filteredProduct.category} key={'category-' + key} />
                  <ProductRow product={filteredProduct} key={'product-' + key} />
                </div>
              )
            }
            if (filteredProduct.category !== filteredProducts[key - 1].category) {
              return (
                <div>
                  <ProductCategoryRow name={filteredProduct.category} key={'category-' + key} />
                  <ProductRow product={filteredProduct} key={'product-' + key} />
                </div>
              )
            }
            return <ProductRow product={filteredProduct} key={'product-' + key} />
          })}
        </div>
      </div>
    )
  }
}

ProductTable.propTypes = {
  productLists: PropTypes.array,
  filter: PropTypes.object
}

export default ProductTable
