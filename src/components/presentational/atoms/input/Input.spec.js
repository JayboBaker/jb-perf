import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './Input'

describe('<Input />', () => {
  const initialProps = {
    name: 'test-input-name'
  }

  const wrapper = shallow(<Component {...initialProps} />)

  it('contains an <input/> element', function () {
    expect(wrapper.find('input')).to.have.length(1)
  })
})
