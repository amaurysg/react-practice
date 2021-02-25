import getHeroeByIdAsync from "../../base/09-promesas"
import heroes from "../../data/hero"


describe('Pruebas Promeses', () => {
  
  test('Debe retornar un heroe Async', ( done ) => {

    const id = 1 
    getHeroeByIdAsync(id)
      .then( heroe =>{

        expect(heroe).toBe(heroes[0])

        done()
      })



    
  })
  test('Debe error si hero por Id no existe', ( done ) => {

    const id = 10
    getHeroeByIdAsync(id)
      .catch(error =>{
        expect(error).toBe('No se pudo encontrar el héroe')
        done()
      })


    
  })
  
  
})
