// @flow

import React from 'react'
import cn from 'classnames'
import Delete from 'components/Delete'

const Notification = ({
  className,
  onClose,
  children,
}: {
  className?: string,
  onClose?: Function,
  children?: Element,
}) => (
  <div className={cn('notification', className)}>
    {!!onClose && (
      <Delete onClick={() => !!onClose && onClose()} />
    )}
    {children}
  </div>
)

Notification.defaultProps = {
  className: undefined,
  onClose: null,
  children: null,
}

export default Notification
