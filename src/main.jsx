import React, { useCallback, useEffect, useState } from 'react'
import Additems from './additems'
import Searchitems from './searchitems'
import Listitems from './listitems'
import Itemscount from './itemscount'

function Main() {


  const [items,setItems]=useState('')
  const [listItem,setListItem]=useState([])
  const [searchInput,setSearchInput]=useState('')

  

  useEffect(() => {
    // Load data from local storage on initial render
    const storedItems = localStorage.getItem('listItems');
    if (storedItems) {
      setListItem(JSON.parse(storedItems));
    }
  }, []);

  useEffect(()=>{
    //stores listitem value for everytime listItem is rendered or updated
    console.log(listItem);
    localStorage.setItem('listItems',JSON.stringify(listItem))
  },[listItem])



  // this handleList function gets user input for every change occurs in inputfield
  
  const handleList=useCallback((e)=>{

   setItems(e.target.value)
   
  },[])


  //this function is responsible to add items when the add button is clicked

  const handleAddItems=useCallback(()=>{
  if(items!==''){
  const newItem={
    id:Date.now(),
    list:items,
    completedStatus:false
  }
  
 setListItem([...listItem,newItem])
 

 setItems('')
}
  },[items])



  //this function is responsible to delete items when delete button is clicked
  // delete operation is used by filter() method

  const deleteItem=(itemId)=>{
    const lastUpdatedList=listItem.filter(item=>item.id!==itemId)
    setListItem(lastUpdatedList)
  }
 

  //this function is responsible for checking and unchecking the checkbox based on previous state
   
  const handleCheckBox=(itemId)=>{
   const updatedList=listItem.map(item=>{
    if(item.id===itemId){
//spread operator is used in item object to replace the boolean value of completedStatus

      return {...item,completedStatus:!item.completedStatus}
    }
    return item   //returns item and stored in updatedList
   });
   setListItem(updatedList)    // updatedList is set as new state of listItem
  }


// this function is responsible to search for listed items previously
//the input given into the search input field is stored as value of setSearchInput
  const handleSearch=(e)=>{
    setSearchInput(e.target.value)
    console.log(e.target.value);
  }


// we have the searchInput value from previous function,
// now we can compare the previously listeditems list !== search input which filters sorted results
  const filteredList = 
(  listItem
  ? listItem.filter((item) =>
      item.list.toLowerCase().includes(searchInput.toLowerCase())  //converting both into lowercase for perfect match
    )
  : []);





  return (
    <main className='main'>

    <div className='inputArea'>
      <Additems 
    items={items} 
    handleList={handleList} 
    handleAddItems={handleAddItems}/>

    <Searchitems 
    handleSearch={handleSearch}
    />
    </div>

  <Listitems 
    items={filteredList} 
    deleteItem={deleteItem}
    handleCheckBox={handleCheckBox}
    />
  
    <Itemscount count={listItem.length}/>
    
    </main>
  )
}

export default Main