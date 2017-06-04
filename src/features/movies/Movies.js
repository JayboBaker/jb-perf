import React, { Component } from 'react'

import SearchBar from '../../components/presentational/molecules/search-bar/SearchBar'

export default class Movies extends Component {
  render () {
    return (
      <div>
        <SearchBar labelText='Search Movies DB' />
      </div>

    )
  }
}
