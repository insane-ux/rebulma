// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from './'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon name="fa-check" />
  ))
  .add('small', () => (
    <Icon className="is-small" name="fa-check" />
  ))
  .add('large', () => (
    <Icon className="is-large" name="fa-check" />
  ))
