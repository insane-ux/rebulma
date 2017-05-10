// @flow

import React from 'react'
import { themr } from 'react-css-themr'
import Icon from 'components/Icon'
import cn from 'classnames'

export const defaultStyles = {
  root: '',
  input: '',
  leftIcon: '',
  rightIcon: '',
}

const Input = ({
  theme,
  className,
  leftIcon,
  rightIcon,
  ...props
}: {
  theme: { [key: string]: string },
  className?: string,
  leftIcon?: string,
  rightIcon?: string,
}) => {
  const rootClassName = cn('control', className, theme.root, {
    'has-icons-left': !!leftIcon,
    'has-icons-right': !!rightIcon,
  })
  return (
    <p className={rootClassName}>
      <input
        className={cn('input', theme.input)}
        type="text"
        {...props}
      />
      {leftIcon && (
        <Icon
          name={leftIcon}
          className={cn('is-left', theme.leftIcon)}
        />
      )}
      {rightIcon && (
        <Icon
          name={rightIcon}
          className={cn('is-right', theme.rightIcon)}
        />
      )}
    </p>
  )
}

Input.defaultProps = {
  className: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
}

export default themr('Input', defaultStyles)(Input)
