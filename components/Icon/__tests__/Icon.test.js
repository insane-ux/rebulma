/* global it, expect, describe */

// @flow

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Icon from '../index'

describe('With Enzyme', () => {
  it('Icon with className', () => {
    const input = shallow(
      <Icon name="fa-check" className="is-small" />,
    )

    // The wrapper
    expect(input.find('.is-small').prop('className')).toEqual('icon is-small')
    // The Icon
    expect(input.find('i').prop('className')).toEqual('fa fa-check')
  })
})

describe('With Snapshot Testing', () => {
  it('Icon with className', () => {
    const component = renderer.create(<Icon name="fa-check" className="some" />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
