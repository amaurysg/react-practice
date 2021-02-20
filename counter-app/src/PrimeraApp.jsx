import React, { useState } from 'react'

const PrimeraApp = () => {

/*   const [user, setuser] = useState(false) */
const user = true
const names = ['Amaury',9,8]
const saludos = {
  names:'amaury', 
  apellido:'soto',
  edad:25
}

  return (
        
       <>
            {
              !user ? 
              <h1>No hay User</h1> 
              :  
              <div>
                <h1>Welcome {JSON.stringify(saludos,null, 3)} </h1>
                <form action="">
                  <input type="text"/>
                  <input type="text"/>
                </form>
              </div>
            }
         

       </> 
       
    
  )
}



export default PrimeraApp
