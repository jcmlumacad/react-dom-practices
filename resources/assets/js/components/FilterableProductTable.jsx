import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchBar from '@component/SearchBar'
import ProductTable from '@component/ProductTable'

export default class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: {
        name: '',
        hasStock: false
      }
    }

    this.handleSearchChanged = this.handleSearchChanged.bind(this)
    this.handleStockChanged = this.handleStockChanged.bind(this)
  }

  handleSearchChanged (keyword) {
    this.setState(previous => ({
      search: {
        name: keyword,
        hasStock: previous.search.hasStock
      }
    }))
  }

  handleStockChanged (hasStock) {
    this.setState(previous => ({
      search: {
        name: previous.search.name,
        hasStock: hasStock
      }
    }))
  }

  render () {
    return (
      <div>
        <SearchBar onSearchChanged={this.handleSearchChanged} onStockChanged={this.handleStockChanged} filter={this.state.search} />
        <ProductTable productLists={this.props.products} filter={this.state.search} />
      </div>
    )
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.array
}
