import React from 'react'
import DailyItems from './DailyItems/DailyItems';
import './DailyRow.css'

const DailyRow = props => {
  const array = props.data
  array.shift()
  return (
    <div className="DailyRow">
      <DailyItems
        data={array}
      />

    </div>


  )
}

export default DailyRow