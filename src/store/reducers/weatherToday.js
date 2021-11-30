import { FETCH_WEATHER_ERROR, FETCH_WEATHER_SUCCESS } from '../actions/actionTypes'

const initialState = {
  name: 'Kyiv',
  temp: 0,
  error: null
}

export default function weatherTodayReducer(state = initialState, action) {
  
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state, name: action.name, temp: action.temp
      }
    case FETCH_WEATHER_ERROR:
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}