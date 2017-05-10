/* global it, expect, describe */

// @flow

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Icon from '../index'

describe('With Enzyme', () => {
  it('Icon with className', () => {
    const input = shallow(
      <Icon className="some" />,
    )

    expect(input.find('.some').prop('className')).toEqual('some')
  })
})

describe('With Snapshot Testing', () => {
  it('Icon with className', () => {
    const component = renderer.create(<Icon className="some" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
