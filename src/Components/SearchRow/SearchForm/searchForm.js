import React from "react"
import './SearchForm.css'

const SearchForm = props => {

  return (
    <div className="SearchForm">
      <h1>Weather Forecast</h1>
      <form action="crear" onSubmit={props.func}>
        <input type="text" name="input" />
         <button  type='submit' >click</button> 
      </form>  
    </div>
  )
}
export default SearchForm