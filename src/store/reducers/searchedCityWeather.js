import { FETCH_CITY_WEATHER_ERROR, FETCH_CITY_WEATHER_SUCCESS } from "../actions/actionTypes"

const initialState = {
  searchedName: null,
  searchedTemp: null,
  daily: [],
  history: [],
  error: null
}

export default function searchedCityWeatherReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_CITY_WEATHER_SUCCESS:
      return {
        ...state, 
        searchedName: action.searchedName,
        searchedTemp: action.searchedTemp,
        daily: action.daily,
        history: [action.history, ...state.history]

      }
    case FETCH_CITY_WEATHER_ERROR:
      return {
        ...state, error: action.error
      }

    default:
      return state
  }
}