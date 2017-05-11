// @flow

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Delete from './'

storiesOf('Delete', module)
  .add('default', () => (
    <div>
      <h1>Normal</h1>
      <Delete onClick={action('click')} />
      <h1>Small</h1>
      <Delete onClick={action('click')} className="is-small" />
      <h1>Large</h1>
      <Delete onClick={action('click')} className="is-large" />
    </div>
  ))
