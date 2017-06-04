import React from 'react'

import Form from '../../atoms/form/Form'
import Button from '../../atoms/button/Button'
import LabelledInput from '../labelled-input/LabelledInput'

const SearchBar = ({labelText}) =>
  <div>
    <Form>
      <LabelledInput name='search' {...{labelText}} />
      <Button text='Search' type='submit' />
    </Form>
  </div>

export default SearchBar
