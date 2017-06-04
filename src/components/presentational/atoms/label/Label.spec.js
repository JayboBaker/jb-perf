import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './Label'

describe('<Label />', () => {
  const initialProps = {
    children: <div className='test-label-children' />,
    htmlFor: 'test-html-for',
    text: 'Test Label Text'
  }
  const wrapper = shallow(<Component {...initialProps} />)

  it('contains an <label/> element', function () {
    expect(wrapper.find('label')).to.have.length(1)
  })

  it('renders its children', function () {
    expect(wrapper.find('.test-label-children')).to.have.length(1)
  })

  it('passes props to the label element', function () {
    expect(wrapper.find('label').props().htmlFor).to.equal(initialProps.htmlFor)
    expect(wrapper.find('label').text()).to.equal(initialProps.text)
  })
})
