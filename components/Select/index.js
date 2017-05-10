// @flow

import React from 'react'
import { themr } from 'react-css-themr'
import cn from 'classnames'

export const defaultStyles = {
  root: '',
  select: '',
}

const Select = ({
  theme,
  className,
  options = [],
  ...props
}: {
  theme: { [key: string]: string },
  className?: string,
  options?: Array<{ label: string, value: string }>,
}) => {
  const rootClassName = cn('control', className, theme.root)
  return (
    <p className={rootClassName}>
      <span className={cn('select', theme.select)}>
        <select {...props}>
          {options.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </span>
    </p>
  )
}

Select.defaultProps = {
  className: undefined,
  placeholder: undefined,
  options: [],
}

export default themr('Select')(Select)
