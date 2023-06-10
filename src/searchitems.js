import React from 'react'


function Searchitems({handleSearch}) {
  return (
    <div className='searchitems'><form>
    <input type="text"
    autoCapitalize='on'
    autoFocus

    onChange={handleSearch}
    placeholder='Search items' /></form>
    </div>
  )
}

export default Searchitems