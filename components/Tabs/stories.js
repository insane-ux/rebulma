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
      <div className="heading">Default</div>
      <MyTabs />
      <div className="heading">Small & center</div>
      <MyTabs className="is-small is-centered" />
      <div className="heading">Toggled</div>
      <MyTabs className="is-toggle" />
    </div>
  ))
