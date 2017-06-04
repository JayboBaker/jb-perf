import React from 'react'
import PropTypes from 'prop-types'

import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'

const LabelledInput = ({name, labelText}) =>
  <Label text={labelText} htmlFor={name}>
    <Input {...{name}} />
  </Label>

LabelledInput.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default LabelledInput
