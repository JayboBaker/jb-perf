import React from 'react'

import Form from '../../atoms/form/Form'
import Button from '../../atoms/button/Button'
import LabelledInput from '../labelled-input/LabelledInput'

const SearchBar = () =>
  <div>
    <Form>
      <LabelledInput />
      <Button text='Search' />
    </Form>
  </div>

export default SearchBar
