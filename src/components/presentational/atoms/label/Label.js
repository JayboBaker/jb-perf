import React from 'react'
import PropTypes from 'prop-types'

const Label = ({children}) =>
  <label>
    {children}
  </label>

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
export default Label
