// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Label from 'components/Label'
import Input from './'

storiesOf('Input', module).add('all', () => (
  <div className="box">
    <Label>default</Label>
    <Input />
    <Label>small</Label>
    <Input theme={{ input: 'is-small' }} />
    <Label>loading</Label>
    <Input className="is-loading" />
    <Label>read only</Label>
    <Input readOnly />
    <Label>disabled</Label>
    <Input disabled />
    <Label>with left icon</Label>
    <Input leftIcon="fa-pencil-square-o" theme={{ input: 'is-large' }} />
    <Label>with right icon</Label>
    <Input
      rightIcon="fa-pencil-square-o"
      theme={{ input: 'is-small', leftIcon: 'is-small' }}
    />
    <Label>with both icon</Label>
    <Input
      leftIcon="fa-pencil-square-o"
      rightIcon="fa-check"
      theme={{ leftIcon: 'is-small' }}
    />
  </div>
))
