import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp'


describe('Pruebas <CounterApp/>', () => {

 beforeEach(() => {
   console.log("Before")
 })

  test('Debe mostrar correctamente el comp CounterApp', () => {

      const value = 100 
      //We use shallow for search or capture a component 
      const wrapper = shallow(<CounterApp value={value}/>)

      expect(wrapper).toMatchSnapshot()

    
  })
  test('Debe mostrar valor por defecto 100', () => {

      const value = 100 
      const wrapper = shallow(<CounterApp value={value}/>)
      //We can use method find, this search in this case tag <h2> 
      //Also can be able find('.class') or finc('#id')
      const valueInitial = wrapper.find('h2').text().trim()
      console.log(valueInitial)

      expect(valueInitial).toBe('100')

    
  })
  test('Debe incrementar con el boton +1', () => {
        const value = 100 
        const wrapper = shallow(<CounterApp value={value}/>)

        /* const btn1 =  wrapper.find('button').at(0).simulate('click') */
        wrapper.find('button').at(0).simulate('click')
        const valueInitial = wrapper.find('h2').text().trim()

        expect(valueInitial).toBe('101')

          /*  console.log(btn1.html()) */
 

    
  })
  test('Debe incrementar con el boton -1', () => {
        const value = 100 
        const wrapper = shallow(<CounterApp value={value}/>)

        wrapper.find('button').at(1).simulate('click')
        const valueInitialHere = wrapper.find('h2').text().trim()

        expect(valueInitialHere).toBe('99')

          /*  console.log(btn1.html()) */
 

    
  })
  test('reset', () => {
      
        const wrapper = shallow(<CounterApp value={105}/>)
         wrapper.find('button').at(0).simulate('click')
         wrapper.find('button').at(0).simulate('click')
         wrapper.find('button').at(2).simulate('click')

   

        const counterText = wrapper.find('h2').text().trim()

        console.log(counterText)

        expect(counterText).toBe('105')
          /*  console.log(btn1.html()) */
 

    
  })


    
})
