import {combineReducers} from 'redux'
import weatherTodayReducer from './weatherToday'
import searchedCityWeatherReducer from './searchedCityWeather'

export default combineReducers ({
  weatherToday: weatherTodayReducer,
  searchedCityWeather: searchedCityWeatherReducer
})