import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

function Listitems({items,deleteItem,handleCheckBox}) {

  return (
    <div className='listitems' >
     {items.length>0 ? 
      (items.map(item=>{
        return (
          <div className='item' key={item.id}>
            <input type="checkbox"
            checked={item.completedStatus}
            onChange={()=>handleCheckBox(item.id)} />
            <h2 onDoubleClick={()=>handleCheckBox(item.id)}>{item.list}</h2>
            <button onClick={()=>deleteItem(item.id)}><FaTrashAlt/></button>

          </div>
        )
      }))  : <h2>Your list is empty</h2>}
     
      </div>
  )
}

export default Listitems