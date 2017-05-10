// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Label from './'

storiesOf('Label', module)
  .add('default', () => (
    <Label>Default Label</Label>
  ))
  .add('small', () => (
    <Label className="is-small">Small Label</Label>
  ))
  .add('large', () => (
    <Label className="is-large">Large Label</Label>
  ))
