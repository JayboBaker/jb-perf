import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './Button'

describe('<Button />', () => {
  it('contains an <button/> element', function () {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('button')).to.have.length(1)
  })
})
