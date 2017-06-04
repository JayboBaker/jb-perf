import React from 'react'
import { mount } from 'enzyme'
import {expect} from 'chai'

import Component from './Label'

const initialProps = {
  children: <div className='test-label-children'>Test</div>
}
describe('<Label />', () => {
  const wrapper = mount(<Component {...initialProps} />)
  it('contains an <label/> element', function () {
    expect(wrapper.find('label')).to.have.length(1)
  })

  it('renders its children', function () {
    expect(wrapper.find('.test-label-children')).to.have.length(1)
  })
})
