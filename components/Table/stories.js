// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Table from './'

const items = [
  {
    code: 'this-is-title-1',
    name: 'This is Title 1',
  },
  {
    code: 'this-is-title-2',
    name: 'This is Title 2',
  },
  {
    code: 'this-is-title-3',
    name: 'This is Title 3',
  },
]

const fields = {
  code: {
    header: 'Code',
    display: true,
    render: item => (
      <a href={item}>{item.code}</a>
    ),
  },
  name: {
    header: 'Name',
    display: true,
  },
}

storiesOf('Table', module)
  .add('default', () => (
    <div>
      <h2>Default</h2>
      <Table
        items={items}
        uniqueKey="code"
        fields={fields}
      />
      <h2>With Border & Stripped</h2>
      <Table
        className="is-striped is-bordered"
        items={items}
        uniqueKey="code"
        fields={fields}
      />
    </div>
  ))
