import React from 'react'
import PropTypes from 'prop-types'

const Label = ({text, htmlFor, children}) =>
  <label htmlFor={htmlFor}>
    {text}
    {children}
  </label>

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}

export default Label
