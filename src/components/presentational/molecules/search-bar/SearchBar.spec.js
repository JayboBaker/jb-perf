import React from 'react'
import { mount } from 'enzyme'
import chai, { expect, assert } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import { inputName, buttonType, buttonText } from './constantsSearchBar'
import Component from './SearchBar'

import Form from '../../atoms/form/Form'
import Button from '../../atoms/button/Button'
import LabelledInput from '../labelled-input/LabelledInput'

describe('<SearchBar />', () => {
  const handleSubmitSpy = sinon.spy()
  const initialProps = {
    labelText: 'Test Label Text',
    handleSubmit: handleSubmitSpy
  }
  const wrapper = mount(<Component {...initialProps} />)

  before(() => {
    chai.use(sinonChai)
  })

  it('contains a <div /> element', function () {
    expect(wrapper.find('div')).to.have.length(1)
  })
  it('contains a <Form /> component', function () {
    expect(wrapper.find(Form)).to.have.length(1)
  })
  it('contains a <Button /> component', function () {
    expect(wrapper.find(Button)).to.have.length(1)
  })
  it('contains an <LabelledInput /> component', function () {
    expect(wrapper.find(LabelledInput)).to.have.length(1)
  })

  it('passes props to the label element', function () {
    expect(wrapper.find('label').props().htmlFor).to.equal(inputName)
    expect(wrapper.find('label').text()).to.equal(initialProps.labelText)
  })

  it('passes props to the button element', function () {
    expect(wrapper.find('button').props().type).to.equal(buttonType)
    expect(wrapper.find('button').text()).to.equal(buttonText)
  })

  it('fires handleSubmit function', function () {
    wrapper.find(Form).simulate('submit')
    assert(handleSubmitSpy.called)
  })
})
