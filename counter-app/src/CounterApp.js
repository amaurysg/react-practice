import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

  const [num, setNum] = useState(0) //[]

  const  handleAdd = ()=>{
 
    setNum( num +1)
    
  }
  const  handleDec = ()=>{
 
    setNum( num - 1)
    
  }
  const  handleInitial = ()=>{
 
    setNum(0)
    
  }

  return (
    <div>
          <h1>CounterApp</h1>
          <h2> { num } </h2>
          <button onClick={handleAdd}>+1</button>
          <button onClick={handleDec}>-1</button>
          <button onClick={handleInitial}>Initial</button>
         

        
    </div>
  )
}

CounterApp.propTypes={
  value: PropTypes.number
}


export default CounterApp



