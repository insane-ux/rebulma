// @flow

import React from 'react'
import cn from 'classnames'
import Icon from 'components/Icon'

const Tabs = ({ items, className, selected, select }: {
  items: Array<{
    icon?: string,
    label?: string,
  }>,
  className?: string,
  selected: number,
  select: (selected: number) => void,
}) => (
  <div className={cn('tabs', className)}>
    <ul>
      {items.map(({ icon, label }, i) => (
        <li key={label} className={cn({ 'is-active': i === selected })} onClick={() => select(i)}>
          <a>
            {!!icon && (
              <span className="icon">
                <Icon name={icon} />
              </span>
            )}
            {label && (<span>{label}</span>)}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

Tabs.defaultProps = {
  className: null,
}

export default Tabs
