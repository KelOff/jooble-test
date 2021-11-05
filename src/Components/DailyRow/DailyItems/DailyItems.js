import React from 'react'
import Item from './Item/Item'

const DailyItems = props => (
  <ul>
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