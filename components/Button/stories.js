// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Icon from 'components/Icon'
import Field from 'components/Field'
import Button from './'

storiesOf('Button', module)
  .add('default', () => (
    <Button>Default Button</Button>
  ))
  .add('small', () => (
    <Button className="is-small">Small Button</Button>
  ))
  .add('large', () => (
    <Button className="is-large">Large Button</Button>
  ))
  .add('with only icon', () => (
    <Button>
      <Icon name="fa-check" />
    </Button>
  ))
  .add('with left icon', () => (
    <Button className="is-primary">
      <Icon name="fa-check" />
      <span>Submit</span>
    </Button>
  ))
  .add('with right icon', () => (
    <Button className="is-danger">
      <span>Submit</span>
      <Icon name="fa-times" />
    </Button>
  ))
  .add('control (use in Field)', () => (
    <Field className="has-addons">
      <Button control>
        <Icon name="fa-check" />
      </Button>
      <Button control>
        <Icon name="fa-times" />
      </Button>
    </Field>
  ))
