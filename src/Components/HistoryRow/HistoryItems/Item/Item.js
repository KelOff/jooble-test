import React from 'react'

const Item = props => {
  return (
    <li style={{"marginleft": "15px"}} onClick={ () => props.onClick(props.data, props.index)}>{ props.data }</li>
  )
}

export default Item