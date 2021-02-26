import React from 'react'
import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'

describe('Pruebas Comp <PrimeraApp/>', () => {
  
/*   test('Debe mostrar msj Hola Amaury ', () => {

      //We need render the component 
      //This message to evalued
      const saludo = 'Hola Amaury'

      //This we can use method render from  testing-library //
      const {getByText}= render(<PrimeraApp saludo={saludo} />)
    


     
     

      
      //Method toBeInTheDocument from import setupTests.js
      //Here only test about if exist saludo in this component
      expect( getByText(saludo) ).toBeInTheDocument()


  }) */


  test('PrimeraApp correctamente <PrimeraApp/> ', () => {

    const saludo = 'Hola Amaury'
    const wrapper = shallow( <PrimeraApp saludo={saludo} />)

    //We expect that the component render ok 
    expect( wrapper).toMatchSnapshot()
    
  })
  test('Debe mostrar subtitulo enviado por props ', () => {

    const saludo = "Hola, Amaury"
    const subTitulo= "Soy un subtitulo"
    const wrapper = shallow(
       <PrimeraApp
        saludo={saludo}
        subtitulo={subTitulo}
        />)
    
        const textParrafo = wrapper.find('p').text()
        console.log(textParrafo)

        expect(textParrafo).toBe(subTitulo)
  })

  
  

})
