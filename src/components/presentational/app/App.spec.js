import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Component from './App'
import Movies from '../../../features/movies/Movies'

describe('<App />', () => {
  const wrapper = shallow(<Component />)
  it('contains an <div/> element', function () {
    expect(wrapper.find('div')).to.have.length(1)
  })

  it('contains a <Movies /> component', function () {
    expect(wrapper.find(Movies)).to.have.length(1)
  })
})
