import React, { Component } from 'react'

import { fetchMovieSearch } from './apiMovies'

import SearchBar from '../../components/presentational/molecules/search-bar/SearchBar'

export default class Movies extends Component {
  constructor (props) {
    super(props)
    this.state = { movies: [] }
    this.handleSearchRequest = this.handleSearchRequest.bind(this)
  }

  handleSearchRequest (queryString) {
    fetchMovieSearch(queryString)
      .then((res) => this.setState({movies: res.results}))
      .catch((err) => console.error('search error', err))
  }

  renderMoviesList () {
    return this.state.movies.map((movie) => <div key={movie.id}>{movie.original_title}</div>)
  }

  render () {
    return (
      <div>
        <SearchBar labelText='Search Movies DB' handleSubmit={this.handleSearchRequest} />
        {this.renderMoviesList()}
      </div>

    )
  }
}
