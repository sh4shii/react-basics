import React from 'react'

const SearchBar = () => {
  return (
    <div>
     <form style={{display: 'flex', flexDirection: 'column'}}>
      <input style={{width: '200px'}}  type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
    </div>
  )
}

export default SearchBar