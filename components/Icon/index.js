// @flow

import React from 'react'

const Icon = ({ className }: {
  className?: string,
}) => (
  <div className={className}>Icon</div>
)

Icon.defaultProps = {
  className: undefined,
}

export default Icon
