import React from 'react'

const WeatherToday = props => {

  let temperature = 0
  props.temp > 0 ? temperature = '+' + props.temp : temperature = '-' + props.temp

  return (
    <div>
      <h1 style={ { 'fontSize': '2.7rem' } }>
        {props.name} (Today): {temperature}
      </h1>
    </div>
  )
}

export default WeatherToday