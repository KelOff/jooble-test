import React from 'react'
import Item from './Item/Item'

const HistoryItems = props => (
  <ul>
    {props.data.map(item => {
      return (
        <Item 
          data={item}
          onClick={props.onClick}
        />
      )})
    }  
  </ul>
  )


export default HistoryItems