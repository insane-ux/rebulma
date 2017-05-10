// @flow

import React from 'react'
import { compose, mapProps, withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'
import _TopNav from './'

const TopNav = compose(
  withState('isShowSidebar', 'setShowSidebar', false),
  mapProps(({ isShowSidebar, setShowSidebar }) => ({
    isShowSidebar,
    toogleSidebar: () => setShowSidebar(!isShowSidebar),
  })),
)(_TopNav)

storiesOf('TopNav', module)
  .add('default', () => (
    <TopNav isShowSidebar={false} />
  ))
