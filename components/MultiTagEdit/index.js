// @flow

import React from 'react'
import { themr } from 'react-css-themr'
import cn from 'classnames'
import Tag from 'components/Tag'
import Delete from 'components/Delete'

const defaultStyles = {
  root: 'ba b--light-gray br2 pa1',
  tag: 'mr1',
  delete: 'is-small',
  input: 'w-100 input-reset bn outline-0 pa1',
}

const MultiTagEdit = ({
  className,
  inputValue,
  onInputChange,
  value,
  onAdd,
  onRemove,
  // onDuplicate,
  theme,
}: {
  className?: string,
  inputValue: string,
  onInputChange: (inputValue: string) => void,
  value: Array<string>,
  onAdd: (item: string) => void,
  onRemove: (item: string) => void,
  // onDuplicate: (item: string) => void,
  theme: {
    [key: string]: string,
  },
}) => (
  <div className={cn(theme.root, className)}>
    <div>
      {value.map(item => (
        <Tag className={theme.tag} key={item}>
          {item}
          <Delete className={theme.delete} onClick={() => onRemove(item)} />
        </Tag>
      ))}
    </div>
    <input
      className={theme.input}
      value={inputValue}
      onChange={(e) => {
        onInputChange(e.target.value)
      }}
      onKeyDown={(e) => {
        if (inputValue === '' && e.key === ',') {
          e.preventDefault()
          return
        }
        if (inputValue !== '' && [',', 'Enter'].includes(e.key)) {
          if (value.includes(inputValue)) {
            e.preventDefault()
            // onDuplicate(inputValue)
            onInputChange('')
            return
          }
          e.preventDefault()
          onInputChange('')
          onAdd(inputValue)
        }
        // Remove last item if press Backspace
        if (e.key === 'Backspace' && inputValue === '') {
          e.preventDefault()
          if (value.length >= 0) onRemove(value[value.length - 1])
        }
      }}
    />
  </div>
)

MultiTagEdit.defaultProps = {
  className: undefined,
  children: undefined,
}

export default themr('MultiTagEdit', defaultStyles)(MultiTagEdit)
