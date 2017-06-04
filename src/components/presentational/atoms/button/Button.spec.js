import React from 'react'
import { shallow } from 'enzyme'
import {expect} from 'chai'

import Component from './Button'

describe('<Button />', () => {
  const initialProps = {
    text: 'Test Text',
    type: 'Test Type'
  }

  const wrapper = shallow(<Component {...initialProps} />)

  it('contains an <button/> element', function () {
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('passes props to the button element', function () {
    expect(wrapper.find('button').props().type).to.equal(initialProps.type)
    expect(wrapper.find('button').text()).to.equal(initialProps.text)
  })
})
