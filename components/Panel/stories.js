// @flow

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withState } from 'recompose'
import Input from 'components/Input'
import {
  Panel,
  PanelHeading,
  PanelBlock,
  PanelTabs,
} from './'

const items = [
  'All',
  'Success',
  'Fail',
]

const MyPanel = withState('selectedTab', 'selectTab', 0)(
  ({
    selectedTab,
    selectTab,
  }: {
    selectedTab: number,
    selectTab: (selectedTab: number) => void,
  }) => (
    <Panel>
      <PanelHeading>Tasks</PanelHeading>
      <PanelTabs
        selected={selectedTab}
        select={selectTab}
        items={items}
      />
      <PanelBlock>
        <Input
          leftIcon="fa-search"
          theme={{
            input: 'is-small',
            leftIcon: 'is-small',
          }}
        />
      </PanelBlock>
      {selectedTab === 0 && (
        <PanelBlock>
          All Tasks
        </PanelBlock>
      )}
      {selectedTab === 1 && (
        <PanelBlock>
          Success Tasks
        </PanelBlock>
      )}
      {selectedTab === 2 && (
        <PanelBlock>
          Fail Tasks
        </PanelBlock>
      )}
      <PanelBlock>
        The other block
      </PanelBlock>
    </Panel>
  ),
)

storiesOf('Panel', module)
  .add('default', () => (
    <div style={{ width: 300 }}>
      <MyPanel />
    </div>
  ))
