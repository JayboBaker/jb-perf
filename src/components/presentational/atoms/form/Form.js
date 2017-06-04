import React from 'react'
import PropTypes from 'prop-types'

const Form = ({children}) =>
  <form>
    {children}
  </form>

Form.propTypes = {
  children: PropTypes.array.isRequired
}
export default Form
