// @flow

import React from 'react'
import cn from 'classnames'

const Checkbox = ({
  name,
  className,
  children,
  ...props
}: {
  name?: string,
  className?: string,
  children?: Element,
}) => (
  <p className={cn('control', className)}>
    <label htmlFor={name} className="checkbox">
      <input
        name={name}
        type="checkbox"
        {...props}
      /> {children}</label>
  </p>
)

Checkbox.defaultProps = {
  name: undefined,
  className: undefined,
  children: undefined,
}

export default Checkbox
