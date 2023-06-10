import React from 'react'
import {RiTodoLine} from 'react-icons/ri'

function Header({title}) {
  return (
    <header className='header'>
       <div className="title"> <h1><RiTodoLine className='icon'/>{title}</h1></div>
        </header>
    
  )

}

export default Header;