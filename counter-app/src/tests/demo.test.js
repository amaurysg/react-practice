
describe('Pruebas archivo demo.test.js', () => {
  
  test('Los strings deben ser iguales', () => {
    
    const isActive = false
  
    //1. Inicio
    const mensaje  = "Hola Mundo"
  
    //2. estímulo 
    const mensaje2 = "Hola Mundo"
  
  
    //3. Observar el comportamiento 
    expect(mensaje).toBe(mensaje2)
  
  })
})



