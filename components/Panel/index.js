// @flow

import React from 'react'
import cn from 'classnames'

export const Panel = ({
  className,
  children,
}: {
  className?: string,
  children?: any,
}) => (
  <nav className={cn('panel', className)}>
    {children}
  </nav>
)

Panel.defaultProps = {
  className: null,
  children: null,
}

export const PanelHeading = ({
  className,
  children,
}: {
  className?: string,
  children?: any,
}) => (
  <div className={cn('panel-heading', className)}>
    {children}
  </div>
)

PanelHeading.defaultProps = {
  className: null,
  children: null,
}

export const PanelBlock = ({
  className,
  children,
}: {
  className?: string,
  children?: any,
}) => (
  <div className={cn('panel-block', className)}>
    {children}
  </div>
)

PanelBlock.defaultProps = {
  className: null,
  children: null,
}

export const PanelTabs = ({
  className,
  items = [],
  selected,
  select,
}: {
  className?: string,
  items?: Array<string>,
  selected: number,
  select: (selected: number) => void,
}) => (
  <div className={cn('panel-tabs', className)}>
    {items.map((item, index) => (
      <a
        key={item}
        className={cn({ 'is-active': index === selected })}
        onClick={() => select(index)}
      >
        {item}
      </a>
    ))}
  </div>
)

PanelTabs.defaultProps = {
  className: null,
  items: [],
}
