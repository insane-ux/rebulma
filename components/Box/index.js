// @flow

import React from 'react'
import cn from 'classnames'

const Box = ({
  className,
  children,
}: {
  className?: string,
  children?: Element,
}) => (
  <div className={cn('box', className)}>
    {children}
  </div>
)

Box.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Box
