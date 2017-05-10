// @flow

import React from 'react'
import cn from 'classnames'

const Field = ({
  className,
  children,
}: {
  className?: string,
  children?: Element,
}) => (
  <div className={cn('field', className)}>
    {children}
  </div>
)

Field.defaultProps = {
  className: undefined,
  children: undefined,
}

export default Field
