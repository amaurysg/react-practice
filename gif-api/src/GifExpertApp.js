import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {


  const [categories, setCategories] = useState(['Dragon Ball'])
  
/*   const handleAdd = (e)=>{
    //We can use express operato (...), and value to add 
   setCategories([...categories,'Death Note'])
    console.log(categories)  

    //Other way can be 
    setCategories(c => [...c, 'Homer'])
  }  */


  return (
    <div>
        <h2>Gif Expert</h2>

       {/* Here i add props setCategories */}
        <AddCategory setCategories={setCategories}/>

        <hr/>
        
        <ol>
          {
            categories.map( category =>(

              <GifGrid   
                key={category}  
                category={category}          
              />

            )
              

              /*   <li  key={c} >{c} </li> */
              
            )
          }
        </ol>

        
    </div>
  )
}

export default GifExpertApp
