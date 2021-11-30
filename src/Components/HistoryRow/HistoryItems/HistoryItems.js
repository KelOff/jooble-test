import React from 'react'
import Item from './Item/Item'
import './HistoryItems.css'

const HistoryItems = props => (
  <> 
    <h1 style={ { 'display' : 'block' } }>last 10 queries</h1>
    <ul className="HistoryItems">
      {props.data.map(item => {
      return (
        <Item 
          data={ item }
          onClick={ props.onClick }
        />
      )})
    }  
    </ul>
  </>
  )

export default HistoryItems