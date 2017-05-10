// @flow

import React from 'react'
import cn from 'classnames'
import Icon from 'components/Icon'

const TopNav = ({
  isShowSidebar,
  toogleSidebar,
  className,
}: {
  isShowSidebar: boolean,
  toogleSidebar: () => void,
  className?: string,
},
) => {
  const icon = isShowSidebar ? 'fa-close' : 'fa-bars'
  return (
    <nav className={cn('nav has-shadow', className)}>
      <div className="nav-left">
        <a className="nav-item" onClick={() => toogleSidebar()}>
          <Icon name={icon} />
        </a>
      </div>
    </nav>
  )
}

TopNav.defaultProps = {
  className: null,
}

export default TopNav
