// @flow

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Notification from './'

storiesOf('Notification', module)
  .add('default', () => (
    <div style={{ width: 500 }}>
      <div className="heading">Default</div>
      <Notification className="is-info">
        Insert Successfully
      </Notification>
      <div className="heading">With Close</div>
      <Notification
        className="is-info"
        onClose={action('close')}
      >
        Insert Successfully
      </Notification>
      <div className="heading">With Animation</div>
      <Notification
        className="is-info animated slideInUp"
        onClose={action('close')}
      >
        Insert Successfully
      </Notification>
    </div>
  ))
