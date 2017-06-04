import request from 'superagent'

import { tmdbApiKey, tmdbSearchUrl } from './constantsMovies'

export const fetchMovieSearch = (queryString) =>
  request
    .get(tmdbSearchUrl)
    .query({ api_key: tmdbApiKey })
    .query({ query: queryString })
    .then(res => res.body)
