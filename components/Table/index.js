// @flow

import React from 'react'
import cn from 'classnames'

const Cell = ({ item, fieldKey, render }: {
  item: any,
  fieldKey: string,
  render?: (item: any, fieldKey: string) => any,
}) => {
  if (!render) {
    return (
      <span>{item[fieldKey]}</span>
    )
  }
  return render(item, fieldKey)
}

Cell.defaultProps = {
  render: null,
}

const Table = ({
  className,
  uniqueKey,
  fields,
  items,
}: {
  className?: string,
  uniqueKey: string,
  fields: {
    [key: string]: {
      header?: string,
      display: boolean,
      render?: (item: any, fieldKey: string) => any,
    },
  },
  items: Array<any>,
}) => {
  const fieldKeys = Object.keys(fields).filter(key => fields[key].display)
  const headers = fieldKeys.map(key => fields[key].header)

  return (
    <table className={cn('table', className)}>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item[uniqueKey]}>
            {fieldKeys.map(key => (
              <td key={key}>
                <Cell fieldKey={key} item={item} render={fields[key].render} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.defaultProps = {
  className: undefined,
}

export default Table
