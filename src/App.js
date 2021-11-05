import React, {Component} from 'react'
import { connect } from 'react-redux';
import './App.css';
import SearchRow from './Components/SearchRow/SearchRow';
import {fetchWeatherStart} from "./store/actions/weatherToday"
import {fetchHandleChange} from './store/actions/handlerWeather'
import HistoryRow from './Components/HistoryRow/HistoryRow';
import DailyRow from './Components/DailyRow/DailyRow';

class App extends Component {

  componentDidMount() {
    this.props.fetchWeatherStart()
  }

  
  handleChange = event => {
    event.preventDefault()
    const name = event.target.input.value
    this.props.fetchHandleChange(name)
    event.target.input.value = '' 
  }
  choseOfHistory = event => {
    this.props.fetchHandleChange(event) 
  }
  render() {
    return (
      <div className="App">
          <SearchRow 
          state={this.props}
          func={this.handleChange}
          />
          <HistoryRow 
            data={this.props.history}
            onClick={this.choseOfHistory}
          />
          <DailyRow 
            data={this.props.daily}
          />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    temp: state.weatherToday.temp,
    name: state.weatherToday.name,
    searchedName: state.searchedCityWeather.searchedName,
    searchedTemp: state.searchedCityWeather.searchedTemp,
    history: state.searchedCityWeather.history,
    daily: state.searchedCityWeather.daily
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchHandleChange: (event) => dispatch(fetchHandleChange(event)),
    fetchWeatherStart: () => dispatch(fetchWeatherStart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
