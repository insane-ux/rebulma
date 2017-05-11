// @flow

import React from 'react'
import { withState } from 'recompose'
import { storiesOf } from '@kadira/storybook'
import Button from 'components/Button'
import Modal from './'

const MyModal = withState('isShow', 'setShow', false)(
  ({
    isShow,
    setShow,
  }: {
    isShow: boolean,
    setShow: (isShow: boolean) => void,
  }) => (
    <div>
      <Button onClick={() => setShow(true)}>Open</Button>
      <Modal
        theme={{ content: 'animated slideInUp' }}
        open={isShow}
        title="Hello Modal"
        onClose={() => setShow(false)}
        actions={[
          {
            icon: 'fa-check',
            label: 'Confirm',
            className: 'is-primary',
          },
          {
            icon: 'fa-times',
            label: 'Cancel',
            onClick: () => setShow(false),
          },
        ]}
      >
        This is the content
      </Modal>
    </div>
  ),
)

storiesOf('Modal', module)
  .add('default', () => (
    <MyModal />
  ))
