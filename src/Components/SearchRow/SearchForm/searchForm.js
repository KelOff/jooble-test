import React from "react"

const SearchForm = props => {

  return (
        <form action="crear" onSubmit={props.func}>
          <input type="text" name="input" />
          <button type='submit' >click</button>
        </form>  )
}
export default SearchForm