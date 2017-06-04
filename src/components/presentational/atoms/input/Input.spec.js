import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './Input'

describe('<Input />', () => {
  it('contains an <input/> element', function () {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('input')).to.have.length(1)
  })
})
