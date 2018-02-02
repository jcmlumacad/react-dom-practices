import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleSearchChanged = this.handleSearchChanged.bind(this)
    this.handleStockChanged = this.handleStockChanged.bind(this)
  }

  handleSearchChanged (event) {
    let keyword = event.target.value
    this.props.onSearchChanged(keyword)
    event.preventDefault()
  }

  handleStockChanged (event) {
    let hasStock = event.target.checked
    this.props.onStockChanged(hasStock)
  }

  render () {
    const filter = this.props.filter
    const hasStock = filter.hasStock
    const name = filter.name
    return (
      <fieldset>
        <div className='form-group'>
          <input type='text' placeholder='Search ...' className='form-control' onChange={this.handleSearchChanged} value={name} />
          <input type='checkbox' onChange={this.handleStockChanged} checked={hasStock} /> Only shows products in stock
        </div>
      </fieldset>
    )
  }
}

SearchBar.propTypes = {
  onSearchChanged: PropTypes.func,
  onStockChanged: PropTypes.func,
  filter: PropTypes.object
}

export default SearchBar
