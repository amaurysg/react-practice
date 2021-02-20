import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp'
import './index.css'


console.log("GHHOOOAALAA")

const saludo = <h1>Hola Amaury</h1>
const root = document.getElementById("root")
console.log(saludo)

//If I want rendering, so i use ReactDOM.render

ReactDOM.render(<PrimeraApp />, root)
//So, my comments now everything will be in englisj