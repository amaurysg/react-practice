import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp'
import './index.css'
import CounterApp from './CounterApp'


console.log("GHHOOOAALAA")

const saludo = <h1>Hola Amaury</h1>
const root = document.getElementById("root")
console.log(saludo)

//If I want rendering, so i use ReactDOM.render

/* ReactDOM.render(<PrimeraApp saludo='Props saludo'/>, root) */
/* 
ReactDOM.render(<CounterApp value={1} />, root) */
//So, my comments now everything will be in englisj

ReactDOM.render(<PrimeraApp saludo="Hola Amaury" />, root)