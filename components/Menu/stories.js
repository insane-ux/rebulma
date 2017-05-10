// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Menu from './'

const items = [
  {
    href: '/ManageProduct',
    label: 'Products',
    children: [
      {
        href: '/ProductBulkUpload',
        label: 'Bulk Upload',
      },
      {
        href: '/ProductTrash',
        label: 'Trash',
      },
    ],
  },
  {
    href: '/ManageBrand',
    label: 'Brands',
  },
  {
    href: '/ManageCategory',
    label: 'Categories',
  },
]

storiesOf('Menu', module)
  .add('default', () => (
    <Menu
      items={items}
      renderLink={item => (
        <li key={item.href}>
          <a href={item.href}>{item.label}</a>
          {item.children && item.children.length > 0 && (
            <ul>
              {item.children.map(child => (
                <li key={child.href}>
                  <a href={child.href}>{child.label}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      )}
    />
  ))
