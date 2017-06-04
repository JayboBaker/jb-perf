import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './Form'

describe('<Form />', () => {
  it('contains an <form/> element', function () {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('form')).to.have.length(1)
  })
})
