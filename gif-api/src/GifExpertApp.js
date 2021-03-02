import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {


  const [categories, setCategories] = useState(['Eric Cartman'])
  
/*   const handleAdd = (e)=>{
    //We can use express operato (...), and value to add 
   setCategories([...categories,'Death Note'])
    console.log(categories)  

    //Other way can be 
    setCategories(c => [...c, 'Homer'])
  }  */


  return (
    <div>
        <h2 className="animate__animated animate__slow 5s animate__flash animate__infinite	infinite ">Gif Expert</h2>

       {/* Here i add props setCategories */}
        <AddCategory setCategories={setCategories}/>

 
        
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
