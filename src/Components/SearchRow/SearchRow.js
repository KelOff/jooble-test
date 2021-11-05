import React from "react"
import SearchForm from "./SearchForm/searchForm"
import WeatherToday from "./WeatherToday/WeatherToday"

const SearchRow = (props) => {
  let name 
  let temp

  if (props.state.searchedName == undefined) {
      name = props.state.name
      temp = props.state.temp
  } else {
    
      name = props.state.searchedName
      temp = props.state.searchedTemp
  }

 return(
 <div className="searchRow">
    <SearchForm 
      func={props.func}
      />
    <WeatherToday 
      name={name}
      temp={temp}
      />
  </div>

) 
}

export default SearchRow