import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value=100}) => {

  const [num, setNum] = useState(value) //[]

  const  handleAdd = ()=>{
 
    setNum( num +1)
    
  }
  const  handleDec = ()=>{
 
    setNum( num - 1)
    
  }
  const  handleInitial = ()=>{
 
    setNum(value)
    
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



