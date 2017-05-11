// @flow

import React from 'react'
import { compose, withState, withReducer } from 'recompose'
import { storiesOf } from '@kadira/storybook'
import MultiTagEdit from './'

const add = payload => ({ type: 'ADD', payload })
const remove = payload => ({ type: 'REMOVE', payload })

function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'REMOVE':
      return state.filter(x => x !== action.payload)
    default:
      return state
  }
}

const enhanced = compose(
  withState('inputValue', 'onInputChange', ''),
  withReducer('value', 'dispatch', reducer),
)

const MyMultiTagEdit = enhanced(({
  value,
  inputValue,
  onInputChange,
  dispatch,
  ...props
}: {
  value: Array<string>,
  inputValue: string,
  onInputChange: (inputValue: string) => void,
  dispatch: Function,
}) => (
  <MultiTagEdit
    onAdd={payload => dispatch(add(payload))}
    onRemove={payload => dispatch(remove(payload))}
    value={value}
    inputValue={inputValue}
    onInputChange={onInputChange}
    {...props}
  />
))

const theme = {
  root: 'ba b--light-gray br2 pa1',
  tag: 'mh1 is-primary is-large',
  input: 'w-100 input-reset bn outline-0 pa1 f3',
}

storiesOf('MultiTagEdit', module)
  .add('default', () => (
    <div>
      <div className="heading">Default</div>
      <MyMultiTagEdit />
      <div className="heading">Custom Style</div>
      <MyMultiTagEdit theme={theme} />
    </div>
  ))
