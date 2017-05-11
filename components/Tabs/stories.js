// @flow

import React from 'react'
import { withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'
import Tabs from './'

const items = [
  {
    icon: 'fa-th-large',
    label: 'Grid',
  },
  {
    icon: 'fa-table',
    label: 'Table',
  },
  {
    icon: 'fa-list',
    label: 'List',
  },
]

const MyTabs = withState('selected', 'select', 0)(
  ({
    className,
    selected,
    select,
  }: {
    className?: string,
    selected: number,
    select: (selected: number) => void,
  }) => (
    <Tabs
      className={className}
      selected={selected}
      select={select}
      items={items}
    />
  ),
)

storiesOf('Tabs', module)
  .add('default', () => (
    <div>
      <h1>Default</h1>
      <MyTabs />
      <h1>Small & center</h1>
      <MyTabs className="is-small is-centered" />
      <h1>Toggled</h1>
      <MyTabs className="is-toggle" />
    </div>
  ))
