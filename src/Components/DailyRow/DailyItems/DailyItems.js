import React from 'react'
import Item from './Item/Item'
import './DailyItems.css'

const DailyItems = props => (
  <ul className="DailyItems">
    {props.data.map( item => {
    return (
      <Item 
        day={item.dt}
        temp={item.temp.day}
      />
    )})
    }
  </ul>
)

export default DailyItems