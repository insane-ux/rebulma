// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Checkbox from './'

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox>Default Checkbox</Checkbox>
  ))
