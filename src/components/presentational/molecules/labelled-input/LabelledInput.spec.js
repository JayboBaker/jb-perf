import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './LabelledInput'

import Label from '../../atoms/label/Label'
import Input from '../../atoms/input/Input'

describe('<SearchBar />', () => {
  const wrapper = shallow(<Component />)
  it('contains a <Label /> component', function () {
    expect(wrapper.find(Label)).to.have.length(1)
  })
  it('contains a <Input /> component', function () {
    expect(wrapper.find(Input)).to.have.length(1)
  })
})
