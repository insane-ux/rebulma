// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Label from 'components/Label'
import Input from 'components/Input'
import Select from 'components/Select'
import Field from './'

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

storiesOf('Field', module)
  .add('default', () => (
    <Field>
      <Label>Name</Label>
      <Input leftIcon="fa-user" />
    </Field>
  ))
  .add('with addons', () => (
    <Field className="has-addons">
      <Select options={options} />
      <Input leftIcon="fa-user" />
    </Field>
  ))
  .add('with addons & expanded', () => (
    <Field className="has-addons">
      <Select options={options} />
      <Input className="is-expanded" leftIcon="fa-user" />
    </Field>
  ))
  // .add('horizontal', () => (
  //   <Field className="is-horizontal">
  //     <div className="field-label is-normal">
  //       <Label>Name</Label>
  //     </div>
  //     <div className="field-body">
  //       <Field>
  //         <Input leftIcon="fa-user" />
  //       </Field>
  //     </div>
  //   </Field>
  // ))
