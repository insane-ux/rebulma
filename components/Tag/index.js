// @flow

import React from 'react'
import cn from 'classnames'

const Tag = ({
  className,
  children,
}: {
  className?: string,
  children?: any,
}) => (
  <span
    className={cn('tag', className)}
  >
    {children}
  </span>
)

Tag.defaultProps = {
  className: undefined,
  children: null,
}

export default Tag
