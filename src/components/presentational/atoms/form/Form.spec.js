import React from 'react'
import { mount } from 'enzyme'
import {expect} from 'chai'

import Component from './Form'

const initialProps = {
  children: <div className='test-form-children'>Test</div>
}
describe('<Form />', () => {
  const wrapper = mount(<Component {...initialProps} />)
  it('contains an <form/> element', function () {
    expect(wrapper.find('form')).to.have.length(1)
  })

  it('renders its children', function () {
    expect(wrapper.find('.test-form-children')).to.have.length(1)
  })
})
