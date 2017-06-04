import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './SearchBar'

import Form from '../../atoms/form/Form'
import Button from '../../atoms/button/Button'
import LabelledInput from '../labelled-input/LabelledInput'

describe('<SearchBar />', () => {
  const initialProps = {
    labelText: 'Test Label Text'
  }
  const wrapper = shallow(<Component {...initialProps} />)

  it('contains a <div /> element', function () {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('contains a <Form /> component', function () {
    expect(wrapper.find(Form)).to.have.length(1)
  })
  it('contains a <Button /> component', function () {
    expect(wrapper.find(Button)).to.have.length(1)
  })
  it('contains an <LabelledInput /> component', function () {
    expect(wrapper.find(LabelledInput)).to.have.length(1)
  })
})
