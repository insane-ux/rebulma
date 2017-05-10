// @flow

import React from 'react'
import cn from 'classnames'

const Button = ({
  className,
  children,
  control,
  ...props
}: {
  control?: boolean,
  className?: string,
  children?: Element,
}) => {
  const button = (
    <a className={cn('button', className)} {...props}>
      {children}
    </a>
  )
  if (control) {
    return (
      <p className="control">{button}</p>
    )
  }
  return button
}

Button.defaultProps = {
  control: false,
  className: undefined,
  children: undefined,
}

export default Button
