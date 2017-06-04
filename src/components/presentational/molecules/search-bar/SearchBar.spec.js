import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './SearchBar'

import Form from '../../atoms/form/Form'
import Input from '../../atoms/input/Input'
import Button from '../../atoms/button/Button'

describe('<SearchBar />', () => {
  const wrapper = shallow(<Component />)
  it('contains a <div /> element', function () {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('contains a <Form /> component', function () {
    expect(wrapper.find(Form)).to.have.length(1)
  })
  it('contains a <Button /> component', function () {
    expect(wrapper.find(Button)).to.have.length(1)
  })
  it('contains an <Input /> component', function () {
    expect(wrapper.find(Input)).to.have.length(1)
  })
})
