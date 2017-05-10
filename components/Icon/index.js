// @flow

import React from 'react'
import cn from 'classnames'

const Icon = ({ name, className }: { name: string, className?: string }) => (
  <span className={cn('icon', className)}>
    <i className={cn('fa', name)} />
  </span>
)

Icon.defaultProps = {
  className: undefined,
}

export default Icon
