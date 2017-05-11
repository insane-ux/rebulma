// @flow

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Delete from 'components/Delete'
import Tag from './'

storiesOf('Tag', module)
  .add('default', () => (
    <div>
      <h1>Normal</h1>
      <Tag>Normal</Tag>
      <h1>Small & Primary</h1>
      <Tag className="is-small is-primary">Small</Tag>
      <h1>Large</h1>
      <Tag className="is-large">Large</Tag>
      <h1>With Delete</h1>
      <Tag
        className="is-danger"
      >
        Remove <Delete onClick={action('remove')} className="is-small" />
      </Tag>
    </div>
  ))
