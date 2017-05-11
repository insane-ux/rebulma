// @flow

import React from 'react'
import cn from 'classnames'

const Delete = ({
  className,
  onClick,
}: {
  className?: string,
  onClick?: Function,
}) => (
  <button
    className={cn('delete', className)}
    onClick={(e) => {
      e.preventDefault()
      if (onClick) onClick()
    }}
  />
)

Delete.defaultProps = {
  className: undefined,
  onClick: null,
}

export default Delete
