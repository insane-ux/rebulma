// @flow

import React from 'react'
import cn from 'classnames'

const Help = ({
  className,
  children,
}: {
  className?: string,
  children?: Element,
}) => (
  <p className={cn('help', className)}>
    {children}
  </p>
)

Help.defaultProps = {
  htmlFor: undefined,
  className: undefined,
  children: undefined,
}

export default Help
