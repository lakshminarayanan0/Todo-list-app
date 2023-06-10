import React from 'react'
import { FaPlus } from 'react-icons/fa';

function Additems({items,handleList,handleAddItems}) {


  return (
    <div className='additems'>
        <form action=""onSubmit={e=>e.preventDefault()}>
        <input type="text" 
        autoCapitalize='on'
        required
        autoFocus
        placeholder='Add items'
        value={items}
        onChange={handleList}/>
        <button onClick={handleAddItems}><FaPlus/></button></form>
    </div>
  )
}

export default Additems