import { FETCH_CITY_WEATHER_ERROR, FETCH_CITY_WEATHER_SUCCESS } from './actionTypes'

export function fetchHandleChange (event, history) {

  
  return async dispatch => {
    const cityName = event
    const todayLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e44069ee6f8e353c2480291f3db9cdc3`

    try {
      const response = await fetch(todayLink)
      const json = await response.json()
      const lat = json.coord.lat
      const lon = json.coord.lon
      const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts,&appid=e44069ee6f8e353c2480291f3db9cdc3`
      const res = await fetch(link)
      const result = await res.json()
      console.log(result)
      const tempToday = result.daily[0].temp.day
      const daily = result.daily

      dispatch(fetchHandleChangeSuccess(cityName, tempToday, daily))
      } catch (err) {
        dispatch(fetchHandleChangeError())
      }
  }
      
}

export function fetchHandleChangeSuccess(cityName, tempToday, daily) {
  return {
    type: FETCH_CITY_WEATHER_SUCCESS,
    searchedName: cityName,
    searchedTemp: tempToday,
    daily, 
    history: cityName
  }
}

export function fetchHandleChangeError(error){
  return {
    type: FETCH_CITY_WEATHER_ERROR,
    error: alert("Nor Founded")
  }
}