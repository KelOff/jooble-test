import React from 'react'
import DailyItems from './DailyItems/DailyItems';

const DailyRow = props => {
  const array = props.data
  array.shift()
  return (
    <DailyItems
      data={array}
    />


  )
}

export default DailyRow