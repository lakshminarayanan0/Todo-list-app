import React from 'react'

function Itemscount({count}) {
  return (
    <div className='itemscount'>
        <h3 className='count'>{count===1 ? count+' item added': count+' items added' } </h3>
    </div>
  )
}

export default Itemscount