// @flow

import React from 'react'
import cn from 'classnames'

const Menu = ({
  className,
  renderLink,
  items = [],
}: {
  className?: string,
  renderLink: Function,
  items: Array<any>,
}) => (
  <ul className={cn('menu-list', className)}>
    {items.map(renderLink)}
  </ul>
)

Menu.defaultProps = {
  className: null,
  items: [],
}

export default Menu
