import {FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR} from './actionTypes'

export function fetchWeatherStart() {

  return async dispatch => {
    const todayLink = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&appid=e44069ee6f8e353c2480291f3db9cdc3'
    try {
    const response = await fetch(todayLink)
      const json = await response.json()
      const name = json.name
      const temp = Number(json.main.temp).toFixed(0)
      dispatch(fetchWeatherSuccess(name, temp))
    } catch (err) {
      dispatch(fetchWeatherError())
    }
  }
}

export function fetchWeatherSuccess(name, temp) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    temp,
    name,
  }
}
export function fetchWeatherError(error) {
  return {
    type: FETCH_WEATHER_ERROR,
    error: alert("Nor Founded")
  }
}


