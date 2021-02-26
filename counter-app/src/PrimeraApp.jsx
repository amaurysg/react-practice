import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo, subtitulo}) => {

  //Props
 console.log("props, desestructurado:",saludo)
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

            <h1>{saludo} !</h1>
            <p>{subtitulo}</p>

         {/*    {
              !user ? 
              <h1>No hay User</h1> 
              :  
              <div>
              
                <h1>Welcome {JSON.stringify(saludos,null, 3)} </h1>
                <h1>Welcome {saludos.names} </h1>
                <h1> {saludo} </h1>
                <h2> {subtitulo} </h2>
             
                <form action="">
                  <input type="text"/>
                  <input type="text"/>
                </form>
              </div>
            } */}
         

       </> 
       
    
  )
}
//PropTypes //
PrimeraApp.propTypes={
  saludo: PropTypes.string.isRequired
}

//DefaultProps//
PrimeraApp.defaultProps = {
  subtitulo : 'Soy subtitulo (default)'
}


export default PrimeraApp
