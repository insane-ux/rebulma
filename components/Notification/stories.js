// @flow

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Notification from './'

storiesOf('Notification', module)
  .add('default', () => (
    <div style={{ width: 500 }}>
      <h1>Default</h1>
      <Notification className="is-info">
        Insert Successfully
      </Notification>
      <h1>With Close</h1>
      <Notification
        className="is-info"
        onClose={action('close')}
      >
        Insert Successfully
      </Notification>
    </div>
  ))
