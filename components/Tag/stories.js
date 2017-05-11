// @flow

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Delete from 'components/Delete'
import Tag from './'

storiesOf('Tag', module)
  .add('default', () => (
    <div>
      <div className="heading">Normal</div>
      <Tag>Normal</Tag>
      <div className="heading">Small & Primary</div>
      <Tag className="is-small is-primary">Small</Tag>
      <div className="heading">Large</div>
      <Tag className="is-large">Large</Tag>
      <div className="heading">With Delete</div>
      <Tag
        className="is-danger"
      >
        Remove <Delete onClick={action('remove')} className="is-small" />
      </Tag>
    </div>
  ))
