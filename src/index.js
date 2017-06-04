import React from 'react'
import { render } from 'react-dom'
import a11y from 'react-a11y'

import App from './components/container/app/App'

import './index.scss'

if (process.env.NODE_ENV === 'development') {
  a11y(React)
  console.log('a11y dev tools initialised!')
}

const renderApp = () => render(
  <App />,
  document.getElementById('app')
)

renderApp()
