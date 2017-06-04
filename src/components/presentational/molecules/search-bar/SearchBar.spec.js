import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './SearchBar'

describe('<SearchBar />', () => {
  it('contains an <div/> element', function () {
    const wrapper = shallow(<Component />)
    expect(wrapper.find('div')).to.have.length(1)
  })
})
