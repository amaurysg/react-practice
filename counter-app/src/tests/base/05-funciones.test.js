import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas 05-Funciones', () => {

  test('getUser debe retornar un objeto ', () => {

   const userTest =  {
                uid: 'ABC123',
                username: 'El_Papi1502'
                };
    
  const user = getUser()
  
  expect(user).toEqual(userTest)

  })

  //GetUsuario debe retornar un objeto
  test('getUserActivo debe retornar un objeto ', () => {
    
    const nombre = "Amaury"
    const user = getUsuarioActivo(nombre)


    expect(user).toEqual({
      uid:'ABC567',
      username: nombre
    })
    
 
  
 

  })

  
  
})
