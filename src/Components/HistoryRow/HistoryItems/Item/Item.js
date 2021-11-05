import React from 'react'
import './HistoryItem.css'

const Item = props => {
  return (
    <li style={{"marginleft": "15px"}} onClick={ () => props.onClick(props.data, props.index)}>{ props.data }</li>
  )
}

export default Item