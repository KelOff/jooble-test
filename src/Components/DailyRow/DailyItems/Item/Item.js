import React from 'react'
import './DailyItem.css'

const Item = props => {
  console.log(props)
  const temp = Number(props.temp).toFixed(0)

  // const gsDayNames = [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday'
  // ];
  // let d = props.day
  // let dayName = gsDayNames[d.getDay()];
  // console.log(dayName)

  return (
    <div className="DailyItem">
      <h2>{temp}</h2>
    </div>
  )
}

export default Item