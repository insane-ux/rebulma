// @flow

import React from 'react'
import cn from 'classnames'

const Label = ({
  htmlFor,
  className,
  children,
}: {
  htmlFor?: string,
  className?: string,
  children?: Element,
}) => (
  <label htmlFor={htmlFor} className={cn('label', className)}>
    {children}
  </label>
)

Label.defaultProps = {
  htmlFor: undefined,
  className: undefined,
  children: undefined,
}

export default Label
