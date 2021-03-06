import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Component from './Movies'
import SearchBar from '../../components/presentational/molecules/search-bar/SearchBar'

describe('<Movies />', () => {
  const wrapper = shallow(<Component />)
  it('contains an <div/> element', function () {
    expect(wrapper.find('div')).to.have.length(1)
  })

  it('contains an <SearchBar /> component', function () {
    expect(wrapper.find(SearchBar)).to.have.length(1)
  })
})
