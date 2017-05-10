/* global it, expect, describe */

// @flow

import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Input from '../index'

describe('Input', () => {
  it('Input with className', () => {
    const input = mount(
      <Input theme={{ input: 'is-small' }} />,
    )
    expect(input.find('.is-small').prop('className')).toEqual('input is-small')
  })

  it('Input with className', () => {
    const component = renderer.create(<Input theme={{ input: 'is-small' }} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
