import React from 'react'
import HistoryItems from './HistoryItems/HistoryItems'

const HistoryRow = props => {

  const array = props.data
  if (array.length > 10) {array.length = 10}

  return (
    <HistoryItems 
      data={array}
      onClick={props.onClick}
    />
  )
}

export default HistoryRow