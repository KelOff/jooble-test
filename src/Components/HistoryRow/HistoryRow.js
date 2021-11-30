import React from 'react'
import HistoryItems from './HistoryItems/HistoryItems'
import './HistoryRow.css'

const HistoryRow = props => {

  const array = props.data
  if (array.length > 10) {array.length = 10}

  return (
    <div className="HistoryRow">
      <HistoryItems 
        data={ array }
        onClick={ props.onClick }
      />
    </div>
  )
}

export default HistoryRow