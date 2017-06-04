import React from 'react'
import PropTypes from 'prop-types'

import { inputName, buttonText, buttonType } from './constantsSearchBar'

import Form from '../../atoms/form/Form'
import Button from '../../atoms/button/Button'
import LabelledInput from '../labelled-input/LabelledInput'

const SearchBar = ({labelText, handleSubmit}) => {
  const handleOnSubmit = (e) => {
    const searchString = getSearchString(e)
    e.preventDefault()
    handleSubmit(searchString)
  }

  const getSearchString = (e) => {
    return e.target.search ? e.target.search.value : ''
  }

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <LabelledInput name={inputName} {...{labelText}} />
        <Button text={buttonText} type={buttonType} />
      </Form>
    </div>
  )
}

SearchBar.propTypes = {
  labelText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default SearchBar
