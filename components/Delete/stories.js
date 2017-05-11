// @flow

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Delete from './'

storiesOf('Delete', module)
  .add('default', () => (
    <div>
      <div className="heading">Normal</div>
      <Delete onClick={action('click')} />
      <div className="heading">Small</div>
      <Delete onClick={action('click')} className="is-small" />
      <div className="heading">Large</div>
      <Delete onClick={action('click')} className="is-large" />
    </div>
  ))
