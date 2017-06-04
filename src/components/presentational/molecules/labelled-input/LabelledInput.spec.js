import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Component from './LabelledInput'

import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'

describe('<SearchBar />', () => {
  const initialProps = {
    name: 'test-search-bar-name',
    labelText: 'Test Label Text'
  }
  const wrapper = mount(<Component {...initialProps} />)

  it('contains a <Label /> component', function () {
    expect(wrapper.find(Label)).to.have.length(1)
  })
  it('contains a <Input /> component', function () {
    expect(wrapper.find(Input)).to.have.length(1)
  })
  it('passes props to the label element', function () {
    expect(wrapper.find('label').props().htmlFor).to.equal(initialProps.name)
    expect(wrapper.find('label').text()).to.equal(initialProps.labelText)
  })
  it('passes props to the input element', function () {
    expect(wrapper.find('input').props().name).to.equal(initialProps.name)
    expect(wrapper.find('input').props().id).to.equal(initialProps.name)
  })
})
