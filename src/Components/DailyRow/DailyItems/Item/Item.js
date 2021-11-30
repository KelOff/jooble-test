import React from 'react'
import './DailyItem.css'

const Item = props => {
  const temp = Number(props.temp).toFixed(0)

  return (
    <div className="DailyItem">
      <h2> { temp } </h2>
    </div>
  )
}

export default Item