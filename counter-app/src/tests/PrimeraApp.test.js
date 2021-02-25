import React from 'react'
import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"

describe('Pruebas Comp <PrimeraApp/>', () => {
  
  test('Debe mostrar msj Hola Amaury ', () => {
    
      const saludo = 'Hola Amaury'
      const { getByText } = render(<PrimeraApp saludo={saludo} />)

      

      expect( getByText(saludo) ).toBeInTheDocument()


  })
  

})
