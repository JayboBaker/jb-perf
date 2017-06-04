import React from 'react'
import PropTypes from 'prop-types'

const Input = ({name}) =>
  <input {...{name}} id={name} />

Input.propTypes = {
  name: PropTypes.string.isRequired
}

export default Input
