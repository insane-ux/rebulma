// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Select from './'

const options = [
  {
    label: 'Rr',
    value: 'dr',
  },
  {
    label: 'Mr',
    value: 'mr',
  },
  {
    label: 'Ms',
    value: 'ms',
  },
  {
    label: 'Miss',
    value: 'miss',
  },
]

storiesOf('Select', module)
  .add('default', () => (
    <Select options={options} />
  ))
  .add('small', () => (
    <Select options={options} theme={{ select: 'is-small' }} />
  ))
  .add('large', () => (
    <Select options={options} theme={{ select: 'is-large' }} />
  ))
