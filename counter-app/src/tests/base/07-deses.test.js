import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas con 07', () => {
  
  test('Debe retornar un string y un num ', () => {
    
  /*   const arr = retornaArreglo()
    console.log(arr) 
    expect(arr).toEqual([ 'ABC', 123 ]) */

    const [letras, numero] = retornaArreglo()

    expect(letras).toBe('ABC')
    expect(typeof letras).toBe('string')
    expect(numero).toBe(123)
    expect( typeof numero).toBe('number')

  })
  

})
