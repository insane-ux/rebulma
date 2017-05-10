// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Input from './'

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('small', () => (
    <Input theme={{ input: 'is-small' }} />
  ))
  .add('with left icon', () => (
    <Input leftIcon="fa fa-pencil-square-o" theme={{ input: 'is-large' }} />
  ))
  .add('with right icon', () => (
    <Input rightIcon="fa fa-pencil-square-o" theme={{ input: 'is-small', leftIcon: 'is-small' }} />
  ))
  .add('with both icon', () => (
    <Input
      leftIcon="fa fa-pencil-square-o"
      rightIcon="fa fa-check"
      theme={{ leftIcon: 'is-small' }}
    />
  ))
