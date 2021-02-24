import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string"

describe('Pruebas en 02-template-string', () => {
  
  test('  getSaludo debe retornar Hola Amaury ', () => {
    
    //Inicio
    const nombre = 'Amaury'
    //Estimulo
     const saludo = getSaludo(nombre)
    
      expect(saludo).toBe( `Hola ${nombre}`)
  
  })
  //getSaludo debe retornar Hola Julio! si no hay argumentos
  test('getSaludo debe retornar Hola Julio si no hay parametros  ', () => {
    
    //Inicio
 
    //Estimulo
     const saludo = getSaludo()
    
      expect(saludo).toBe('Hola Julio')

  
      
       })
    })
